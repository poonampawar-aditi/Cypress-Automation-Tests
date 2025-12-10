const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  env: {
    url: "https://rahulshettyacademy.com",

    // Allure-specific flags
    allure: true,
    allureResultsPath: "allure-results",
    allureReuseAfterSpec: true,
  },

  retries: {
    runMode: 1,
  },

  projectId: "32bd89",

  e2e: {
    setupNodeEvents(on, config) {
      // register Allure writer
      allureWriter(on, config);
      return config;
    },

    specPattern: "cypress/e2e/**/*.cy.js",
  },
});
