export default function(eleventyConfig) {
  eleventyConfig.addCollection('postList', (collectionsApi) => {
    return([...collectionsApi.getFilteredByGlob( "./source/posts/**/*.md" )].reverse());
  });
};
