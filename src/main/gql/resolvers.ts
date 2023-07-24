import { readdirSync } from 'fs';
import { join } from 'path';

const resolversDir = join(__dirname, 'resolvers');

async function getResolvers() {
  // Get all files in the directory
  const files = readdirSync(resolversDir);
  const resolverFiles = files.filter((file: string) => file.endsWith('.ts'));

  // Create an empty resolvers object
  const resolvers = { Query: {}, Mutation: {} };

  // Loop over the files and import the resolvers
  for (const file of resolverFiles) {
    if (file.endsWith('.ts')) {
      const { default: resolver } = await import(`./resolvers/${file}`);
      resolvers.Query = { ...resolvers.Query, ...resolver.Query };
      resolvers.Mutation = { ...resolvers.Mutation, ...resolver.Mutation };
    }
  }

  return resolvers;
}

export default getResolvers;
