const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // projectId: 'upboiu',
  projectId: '32bd89',
  e2e: {
    url: 'https://rahulshettyacademy.com',
       watchForFileChanges: false, //to disable auto re-run of tests on saving the file
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/examples/*.cy.js'
  },
});


const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
 
 async function setupNodeEvents(on,config)
 {
  await addCucumberPreprocessorPlugin(on, config);
 
  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );
 
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
 }
 
 
module.exports = defineConfig({
  defaultCommandTimeout: 6000,
 
  env: {
    url: "https://rahulshettyacademy.com",
  },
  reporter: 'cypress-mochawesome-reporter',
 
  retries: {
    runMode: 1,
 
  },
  projectId: "32bd89",
 
 
  e2e: {
  setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js'
 
  },
});
 