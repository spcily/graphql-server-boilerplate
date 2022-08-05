import path from 'path';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';

export const getSchema = () => {
  const typesArray = loadFilesSync(path.join(__dirname, './../typedefs/**/*.gql'));
  const resolversArray = loadFilesSync(path.join(__dirname, './../resolvers/**/*.resolver.ts'), {
    extensions: ['ts'],
  });
  return makeExecutableSchema({
    typeDefs: mergeTypeDefs(typesArray),
    resolvers: mergeResolvers(resolversArray),
  });
};
