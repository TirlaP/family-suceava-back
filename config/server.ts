module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  bootstrap: async () => {
    const seed = require('../src/bootstrap/seed');
    await seed({ strapi });
  },
});