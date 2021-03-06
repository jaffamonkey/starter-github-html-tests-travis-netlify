// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

var { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {

  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['headless'],
      binary: require('puppeteer').executablePath()
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    onPrepare: function () {
      jasmine.getEnv().addReporter(new SpecReporter({
        displayStacktrace: 'all',      // display stacktrace for each failed assertion, values: (all|specs|summary|none) 
        displaySuccessesSummary: false, // display summary of all successes after execution 
        displayFailuresSummary: true,   // display summary of all failures after execution 
        displayPendingSummary: true,    // display summary of all pending specs after execution 
        displaySuccessfulSpec: true,    // display each successful spec 
        displayFailedSpec: true,        // display each failed spec 
        displayPendingSpec: false,      // display each pending spec 
        displaySpecDuration: false,     // display each spec duration 
        displaySuiteNumber: false,      // display each suite number (hierarchical) 
        colors: {
            success: 'green',
            failure: 'red',
            pending: 'yellow'
        },
        prefixes: {
            success: '✓ ',
            failure: '✗ ',
            pending: '* '
        },
        customProcessors: []
    }));
    },

    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    },
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../tests/puppeteer-protractor.js']
  }
}
