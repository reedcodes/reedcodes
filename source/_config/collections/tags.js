module.exports = function(collection) {
  const tagList = new Set();

  collection.getAll().forEach((item) => {
    (item.data.tags || []).forEach(tag => tagList.add(tag));
  });

  return([...tagList]);
};
