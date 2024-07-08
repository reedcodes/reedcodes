// Import date methods.
const {DateTime} = require('luxon');

module.exports = function(dateObj, dateType) {
  const dateFormat = dateType == 'natural' ? 'dd MMMM yyyy' : 'yyyy-MM-dd';

  return DateTime
    .fromISO(dateObj)
    .toFormat(dateFormat);
};
