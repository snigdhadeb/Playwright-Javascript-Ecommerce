module.exports = {
  testDir: "tests",
  timeout: 30000,
  //retries: 1,
	reporter:[
    ['html'],
    ["allure-playwright"],
    ],
  projects: [
    {
      name: `Chrome`,
      use: {
        browserName: `chromium`,
        channel: `chrome`,
        headless: false,
        viewport: { width: 1720, height: 850 },
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        contextOptions: {recordVideo: { dir: "./videos"}},
        trace: `retain-on-failure`,
      },
    },
    /* {
      name: `Firefox`,
      use: {
        browserName: `firefox`,
        viewport: { width: 1720, height: 850 },
        ignoreHTTPSErrors: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 200,
        },
      },
    },
    {
      name: `Safari`,
      use: {
        browserName: `webkit`,
        viewport: { width: 1720, height: 850 },
        ignoreHTTPSErrors: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
      },
    }, */
  ],
};
