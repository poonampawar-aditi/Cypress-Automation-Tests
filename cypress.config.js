const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'upboiu',
  e2e: {
   
    watchForFileChanges: false, //to disable auto re-run of tests on saving the file
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/examples/*.cy.js'
  },
});
