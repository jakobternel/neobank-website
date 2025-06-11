module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            const fileLoaderRule = webpackConfig.module.rules.find((rule) =>
                rule.test?.toString().includes("svg")
            );
            if (fileLoaderRule) {
                fileLoaderRule.exclude = /\.svg$/i;
            }

            webpackConfig.module.rules.push({
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ["@svgr/webpack"],
            });

            return webpackConfig;
        },
    },
};
