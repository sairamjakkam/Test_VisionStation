const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: './cucumber-json-results/', // Replace with the actual path of your Cucumber JSON files
  reportPath: './cucumber-html-reports/', // Replace with the desired output path
  openReportInBrowser: true, // This will open the HTML report in the browser automatically
});
