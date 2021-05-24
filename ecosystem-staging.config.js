module.exports = {
  apps: [
    {
      name: 'oasis-staging',
      script: 'yarn',
      args: 'start',
      interpreter: 'none',
      env: {
        NODE_ENV: 'development',
        PORT: 4001,
      },
    },
  ],

  deploy: {
    staging: {
      user: 'ci-runner',
      host: 'oasis-deploy',
      ref: 'origin/staging',
      repo: 'https://github.com/oasis-sh/oasis.git',
      path: '/opt/oasis/staging',
      ssh_options: 'StrictHostKeyChecking=no',
      'pre-setup': '',
      'post-setup': '',
      'pre-deploy-local':
        'export NODE_OPTIONS="--max-old-space-size=1024" && yarn && yarn build:all && yarn workspace @oasis-sh/api typeorm:run_migrations',
      'post-deploy':
        'env PM2_HOME=/opt/oasis/.pm2 pm2 reload ecosystem-staging.config.js --env staging',
      'pre-setup': '',
    },
  },
};
