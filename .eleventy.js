const pluginSEO = require('eleventy-plugin-seo')
const pluginRss = require("@11ty/eleventy-plugin-rss")

module.exports = function (config) {
  config.addPassthroughCopy("src/assets");
  config.addPlugin(pluginSEO, require('./src/_data/seo.json'))
  config.addPlugin(pluginRss);
  return {
    dir: {
      input: "./src",
      output: "_site",
      data: "_data",
    },
  };
};
