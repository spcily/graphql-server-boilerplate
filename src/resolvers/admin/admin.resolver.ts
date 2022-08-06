import { getAdminResolver } from './getAdminResolver';

export const AppResolvers = [];

export default {
  Query: {
    admins: getAdminResolver,
  },
  Mutation: {},
};
