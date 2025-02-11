module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-culirk52ng1s73aspjfg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'salsa_family'),
      user: env('DATABASE_USERNAME', 'salsa_family'),
      password: env('DATABASE_PASSWORD', 'jJUfr8bWbxdT8BpQx3oLGjD15C6xEP2H'),
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});