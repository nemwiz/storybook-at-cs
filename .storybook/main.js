module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        'storybook-addon-designs',
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        {
            name: "@storybook/addon-docs",
            options: {transcludeMarkdown: true},
        },
        "@storybook/preset-create-react-app"
    ]
}