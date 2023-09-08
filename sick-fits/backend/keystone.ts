import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost:keystone-sick-fits-tutorial';

const sessionConfig {
  maxAge: 60 * 60 * 24 * 360, // length of staying signed in (seconds, minutes, hours, days)
    secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      creditials: true,
    }
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: Add data seeding here
  },
  lists: createSchema({
    // Schema items go here
  }),
  ui: {
    // TODO: change this for roles
    isAccessAllowed: () => true,
  },
  // TODO, add session values here
});