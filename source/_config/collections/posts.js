module.exports = function(collection) {
  return([...collection.getFilteredByGlob( "./source/posts/**/*.md" )].reverse());
};
