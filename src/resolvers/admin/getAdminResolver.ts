export const getAdminResolver = async (_: any, __: any, ctx: any) => {
  const {
    rows: [result],
  } = await ctx.knex.raw('SELECT NOW()');
  return { date: result.now.toISOString() };
};
