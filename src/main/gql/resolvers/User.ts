import { UserInputError } from 'apollo-server-express';
import { comparePassword, hashPassword, PrismaClient } from '../../util';

const UserResolvers = {
  Query: {
    users: async (parent: any, args: any, ctx: { prisma: PrismaClient; req: any }) => {
      return ctx.prisma.user.findMany();
    },
    user: async (parent: any, args: any, { prisma }: { prisma: PrismaClient }) => {
      return prisma.user.findUnique({ where: { id: parseInt(args.id, 10) } });
    },
    me: async (parent: any, args: any, { prisma, req }: { prisma: PrismaClient; req: any }) => {
      if (!req?.session?.user) {
        throw new Error('Not authenticated');
      }
      return prisma.user.findUnique({ where: { id: req?.session?.user?.id } });
    }
  },

  Mutation: {
    login: async (
      parent: any,
      args: {
        data: {
          email: string;
          password: string;
        };
      },
      ctx: { prisma: PrismaClient; req: any }
    ) => {
      try {
        const user = await ctx.prisma.user.findUnique({
          where: { email: args.data.email }
        });
        if (!user) {
          // Handle invalid email
          throw new UserInputError('Either email or password is incorrect');
        } else {
          const isPasswordMatch = await comparePassword(args.data.password, user.password);
          if (isPasswordMatch) {
            // Authentication successful
            // Store user session information
            ctx.req.session.user = { id: user.id, email: user.email };
            await ctx.req.session.save();
            return user;
          }
          // Handle incorrect password
          throw new UserInputError('Some data is incorrect');
        }
      } catch (e: any) {
        throw new Error(e.message || 'Something went wrong');
      }
    },
    createUser: async (
      parent: any,
      args: {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        phone: string;
        address: string;
        city: string;
        state: string;
        zip: string;
        hireDate: string;
        startingPosition: string;
        currentPosition: string;
        startingPay: number;
        currentPay: number;
        notes: string;
      },
      { prisma }: { prisma: PrismaClient }
    ) => {
      const existingUser = await prisma.user.findUnique({
        where: { email: args.email }
      });
      if (existingUser) {
        throw new UserInputError('Email already exists');
      }
      const passwordIsMinLength = args.password.length >= 8;
      const passwordHasNumber = /\d/.test(args.password);
      const passwordHasUppercase = /[A-Z]/.test(args.password);
      const passwordHasLowercase = /[a-z]/.test(args.password);
      const passwordHasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(args.password);
      if (!passwordIsMinLength) {
        throw new UserInputError('Password must be at least 8 characters');
      } else if (!passwordHasNumber) {
        throw new UserInputError('Password must contain at least 1 number');
      } else if (!passwordHasUppercase) {
        throw new UserInputError('Password must contain at least 1 uppercase letter');
      } else if (!passwordHasLowercase) {
        throw new UserInputError('Password must contain at least 1 lowercase letter');
      } else if (!passwordHasSpecialCharacter) {
        throw new UserInputError('Password must contain at least 1 special character');
      }

      const password = await hashPassword(args.password);
      return prisma.user.create({
        data: {
          firstname: args.firstname,
          lastname: args.lastname,
          email: args.email,
          password,
          phone: args.phone,
          address: args.address,
          city: args.city,
          state: args.state,
          zip: args.zip,
          hireDate: args.hireDate,
          startingPosition: args.startingPosition,
          currentPosition: args.currentPosition,
          startingPay: args.startingPay,
          currentPay: args.currentPay,
          notes: args.notes
        }
      });
    },
    updateUser: async (parent: any, args: any, { prisma }: { prisma: PrismaClient }) => {
      // @ts-ignore
      const { id, ...data } = { ...args.data };
      if (data.password) {
        data.password = await hashPassword(data.password);
      }
      return prisma.user.update({ where: { id }, data });
    },
    deleteUser: async (parent: any, args: any, { prisma }: { prisma: PrismaClient }) => {
      return prisma.user.delete({ where: { id: args.data.id } });
    }
  }
};

export default UserResolvers;
