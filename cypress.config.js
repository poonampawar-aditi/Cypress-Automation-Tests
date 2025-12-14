const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );
  // register Allure writer
  allureWriter(on, config);
  return config;
  // Cucumber Preprocessor setup




}
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
    setupNodeEvents,

    specPattern: "cypress/e2e/**/*.cy.js",
    // specPattern: "cypress/e2e/**/*.feature",
    "cucumber": {
      "format": [
        "json:cypress/cucumberreports/results.json"
      ]
    }

    // cucumberJson: {
    //   generate: true,
    //   outputFolder: "./cypress/cucumberreports/results.json",
    //   // filePrefix: "",
    //   // fileSuffix: ".json"
    // }
  },
});
