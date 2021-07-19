module.exports = {
    pwa: {
        workboxOptions: {
            runtimeCaching: [
                {
                    urlPattern: /^http:\/\/127.0.0.1:800*/,
                    handler: 'networkFirst',
                    options: {
                        cacheName: 'apiResponse',
                        expiration: {
                            // Keep at most 50 entries.
                            maxEntries: 50,
                            // Don't keep any entries for more than 30 days.
                            maxAgeSeconds: 30 * 24 * 60 * 60,
                            // Automatically cleanup if quota is exceeded.
                            purgeOnQuotaError: true
                        }
                    }
                }
            ]
        }
    },
    devServer: {
        proxy: 'https://fcm.googleapis.com/'
    },
    transpileDependencies: ["vuetify"]
}
