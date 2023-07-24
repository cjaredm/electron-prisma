import { PrismaClient } from '../util';
import seedUser from './user';

export default async function seedDb(prisma: PrismaClient) {
  console.log('Seeding database...');
  try {
    const results = await Promise.allSettled([prisma.user.count()]);

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const handleResults = (results: PromiseSettledResult<number>[]) => {
      // @ts-ignore
      const errors = results.filter(result => result.status === 'rejected').map(result => result?.reason);

      if (errors.length) {
        // Aggregate all errors into one
        throw new AggregateError(errors);
      }

      // @ts-ignore
      return results.map(result => result?.value || null);
    };

    const handledResults = handleResults(results);
    const [usersCount] = handledResults;

    if (!usersCount) await seedUser(prisma);
  } catch (error) {
    console.log('Error seeding database:');
    console.error(error);
    throw error;
  }
}
