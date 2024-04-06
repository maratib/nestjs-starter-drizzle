// Add ./db/db.ts

import { faker } from '@faker-js/faker';
import { db } from './db';

import { users, type NewUser } from '../src/drizzle/schema';

const main = async () => {
  console.log('Seeding starts ...');
  const data: NewUser[] = [];

  // // Manual Push
  // data.push(
  //   {
  //     email: 'admin@mail.com',
  //   },
  //   {
  //     email: 'user@mail.com',
  //   },
  // );

  for (let index = 0; index < 10; index++) {
    data.push({
      email: faker.internet.email(),
    });
  }

  // console.log(data);
  try {
    await db.insert(users).values(data);
  } catch (error: any) {
    console.log(error.message);
  }
  console.log('Seeding done ...');
};

main();
