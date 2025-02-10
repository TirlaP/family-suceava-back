export default ({ env }: { env: any }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'DEFAULT_SECRET_CHANGE_ME'),
    },
  },
});
