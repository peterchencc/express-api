module.exports = {
  apps : [{
    name: 'express-api',
    script: 'index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'deploy',
      host : '139.162.42.127',
      ref  : 'origin/master',
      repo : 'git@github.com:peterchencc/express-api.git',
      path : '/home/deploy/express-api',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
