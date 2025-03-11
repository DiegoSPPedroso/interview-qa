const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  retries: {
    runMode: 2,
  },
  e2e: {
    baseUrl: 'https://qa-challenge-rx.vercel.app/',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
