module.exports = {
  apps: [
    {
      name: 'estate-apim',
      script: 'dist/app.js',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '500M',
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 4000
      }
    }
  ]
};
