// eslint-disable-next-line import/no-cycle
import { hashPassword, PrismaClient } from '../util';

const defaultUser = {
  firstname: 'SUPER',
  lastname: 'ADMIN',
  email: 'email@email.com',
  password: '123456asdasdasd',
  phone: '5555555555'
};

// eslint-disable-next-line import/prefer-default-export
export async function getUser() {
  const password = await hashPassword(defaultUser.password);
  return { ...defaultUser, password };
}

export default async function seedUser(prisma: PrismaClient) {
  console.log('Seeding default User...');

  const password = await hashPassword(defaultUser.password);
  const data = { ...defaultUser, password };
  // @ts-ignore
  return prisma.user.create({ data });
}
