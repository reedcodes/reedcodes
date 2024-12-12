export default function(eleventyConfig) {
  eleventyConfig.addCollection('tagList', (collectionsApi) => {
    const tagList = new Set();

    collectionsApi.getAll().forEach((item) => {
      (item.data.tags || []).forEach(tag => tagList.add(tag));
    });

    return([...tagList]);
  });
};
