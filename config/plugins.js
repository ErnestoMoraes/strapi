module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', '3+5uOB3YAWmfj/D7q2PNng=='),
    },
  },
});
