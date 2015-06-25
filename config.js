exports.config = {


  specs: [
    'tests/ola/*.js'
  ],

  //seleniumArgs: ['-browserTimeout=60'],
  seleniumAddress: 'http://0.0.0.0:4444/wd/hub',

  // capabitilies: {
  //   'browserName': 'firefox'
  // },

  multiCapabilities: [{

    'browserName': 'firefox'
  }, {
    'browserName': 'chrome'
  }],



  baseUrl: 'http://127.0.0.1:8000'


  // framework: 'jasmine',

  // onPrepare: function() {
  //   browser.driver.manage().window().maximize();
  // },

  // // Options to be passed to Jasmine-node.
  // jasmineNodeOpts: {
  //   showColors: true,
  //   defaultTimeoutInterval: 30000
  // }

};