module.exports = function( eleventyConfig ) {

  const eleventyNavigationPlugin = require( '@11ty/eleventy-navigation' );
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Send assets from source to site.
  eleventyConfig.addPassthroughCopy( {
    "./node_modules/@fortawesome/fontawesome-free/webfonts/": "dist/webfonts/fa/",
    "./source/_images/": "dist/images/"
  } );

  // Configuration.

  return {
    dir: {
      input: 'source',
      data: '_data',
      layouts: '_layouts',
      includes: '_includes',
      output: 'site'
    }
  };
};
