const withPlugins = require('next-compose-plugins')

const withPWA = require('next-pwa')

module.exports = withPlugins([
  [withPWA, {
    pwa: {
      disable: process.env.NODE_ENV !== 'production',
      dest: 'public',
      register: true,
      sw: '/service.worker.js'
    }
  }]
])
