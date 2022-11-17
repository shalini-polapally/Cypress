const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '2tr27m',
  e2e: {
    // implement node event listeners here
    baseUrl: 'http://zero.webappsecurity.com/login.html',
    watchForFileChanges: false,
    viewportWidth: 1000,
    viewportHeight: 660,
    waitForAnimations: true,
    animationDistanceThreshold: 20,
    defaultCommandTimeout: 5000,
    execTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    video: false,
    failOnStatusCode: false
  }
});