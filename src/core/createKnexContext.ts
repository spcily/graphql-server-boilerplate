import knex from 'knex';
import { getConfig } from '../config';

export const createKnexContext = () => {
  const config = getConfig();

  return knex({
    client: 'pg',
    connection: {
      host: config.mainDB.host,
      port: Number(config.mainDB.port),
      user: config.mainDB.user,
      password: config.mainDB.pass,
      database: config.mainDB.name,
    },
    pool: { min: 0, max: 50 }
  });
};
