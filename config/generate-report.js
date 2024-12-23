const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './reports', // Path to the directory containing JSON reports
    reportPath: './test-results', // Path to save the generated HTML report
    metadata: {
        browser: {
            name: 'chrome',
            version: 'latest',
        },
        device: 'Local Machine',
        platform: {
            name: 'Windows',
            version: '10',
        },
    },
    customData: {
        title: 'Run Info',
        data: [
            { label: 'Project', value: 'Playwright-Cucumber' },
            { label: 'Execution Start Time', value: new Date().toISOString() },
            { label: 'Execution End Time', value: new Date().toISOString() },
        ],
    },
});
