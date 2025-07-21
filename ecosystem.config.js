module.exports = {
    apps: [
        {
            name: 'estate-apim',
            script: 'npm',
            args: 'run start',
            instances: 1,
            exec_mode: 'fork',
            autorestart: true,
            watch: false,
            max_memory_restart: '500M',
            env: {
                NODE_ENV: 'production'
            }
        }
    ]
};
