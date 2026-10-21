import { DateTime } from 'luxon';

export default function (eleventyConfig) {
  eleventyConfig.addShortcode('shortcodeYear', () =>
    `${new Date().getFullYear()}`
  );
};
