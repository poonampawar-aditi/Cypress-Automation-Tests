const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  env: {
    url: "https://rahulshettyacademy.com",
  },

  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports/html",
    overwrite: false,
    html: false,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  retries: {
    runMode: 1,

  },

  projectId: "32bd89",

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      const { merge } = require("mochawesome-merge");
      const generator = require("mochawesome-report-generator");

      on("after:run", async () => {
        const fs = require("fs");

        const reportDir = "cypress/reports/html";

        // If the folder does NOT exist or contains NO json files → skip merge
        if (
          !fs.existsSync(reportDir) ||
          fs.readdirSync(reportDir).filter(f => f.endsWith(".json")).length === 0
        ) {
          console.log("⚠ No mochawesome JSON files found. Skipping merge step.");
          return;
        }

        const { merge } = require("mochawesome-merge");
        const generator = require("mochawesome-report-generator");

        const report = await merge({
          files: [`${reportDir}/*.json`],
        });

        await generator.create(report, {
          reportDir,
        });

        console.log("✔ Mochawesome report successfully generated.");
      });

    },

    specPattern: "cypress/e2e/**/*.cy.js",
  }

});