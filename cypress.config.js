const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x375y8',
  e2e: {
    "baseUrl": "http://qamid.tmweb.ru",
    "video": false,
  },
});
