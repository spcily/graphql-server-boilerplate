import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { createKnexContext } from './core/createKnexContext';
import { getSchema } from './core/schema';

const server = new ApolloServer({
  schema: getSchema(),
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  context: async (): Promise<any> => ({
    knex: createKnexContext(),
  }),
});

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
