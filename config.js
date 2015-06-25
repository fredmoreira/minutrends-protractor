exports.config = {

  chromeDriver: './node_modules/protractor/selenium/chromedriver',
  // Do not start a Selenium Standalone sever - only run this using chrome.
  directConnect: false,
  specs: [
    'tests/ola/*.js'
  ],

  seleniumArgs: ['-browserTimeout=60'],
  seleniumAddress: 'http://0.0.0.0:4444/wd/hub',

  capabitilies: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  baseUrl: 'http://127.0.0.1:8000',

  allScriptsTimeout: 30000,

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }

};