import {DateTime} from 'luxon';

export default function(eleventyConfig) {
  eleventyConfig.addFilter('dateSimple', (dateObj, dateType) => {
    const dateFormat = dateType == 'natural' ? 'dd MMMM yyyy' : 'yyyy-MM-dd';

    return DateTime
      .fromISO(dateObj)
      .toFormat(dateFormat);
  });
};
