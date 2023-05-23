module.exports = config => {
    config.set({
        plugins: [
            "karma-jasmine",
            "karma-chrome-launcher",
            "karma-webpack",
            "karma-sourcemap-loader"
        ],
        frameworks: ["jasmine", "webpack"],
        client: {
            jasmine: {
                random: true
            }
        },
        files: [
            {pattern: "karma.index.ts", watched: false},
            {pattern: "karma.test.index.ts", watched: false},
        ],
        logLevel: config.LOG_DEBUG,
        preprocessors: {
            "karma.index.ts": ["webpack", "sourcemap"],
            "karma.test.index.ts": ["webpack", "sourcemap"]
        },
        webpack: require("./webpack.config.karma"),
        browsers: ["ChromeHeadlessCustom"],
        customLaunchers: {
            ChromeHeadlessCustom: {
                base: "ChromeHeadless",
                flags: ["--no-sandbox"]
            }
        },
        browserNoActivityTimeout: 60000,
        reporters: [
            "progress"
        ],
        singleRun: true
    });
};
