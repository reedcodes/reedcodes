/*
 * 11ty plugins.
 */

import eleventyNavigationPlugin from '@11ty/eleventy-navigation';
import { feedPlugin } from '@11ty/eleventy-plugin-rss';

import favicons from 'eleventy-plugin-gen-favicons';
import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import metagen from 'eleventy-plugin-metagen';

import collectionPostList from './source/_config/collections/posts.js';
import collectionTagList from './source/_config/collections/tags.js';
import filterDate from './source/_config/filters/date-simple.js';

/*
 * 11ty configurations.
 * This section includes setup for collections, filters, and shortcodes.
 */

export default async function (eleventyConfig) {
  // Add the 11ty nav plugin. This creates an 11ty navigation based on pages
  // in a collection.
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Add the 11ty RSS plugin. This creates a feed that can then be available
  // for audience to subscribe to the blog in their favorite reader.
  eleventyConfig.addPlugin(feedPlugin, {
    collection: {
      name: 'posts',
    },
    metadata: {
      language: 'en',
      title: 'Reed Piernock',
      subtitle:
        'Reed is a front-end developer and pop culture scholar. Their blog covers a variety of topics, from HTML to horror movies.',
      base: 'https://reedcodes.com/',
      author: {
        name: 'Reed Piernock',
        email: 'hello@reedcodes.com',
      },
    },
  });

  // Add the metagen plugin for 11ty.
  // https://github.com/tannerdolby/eleventy-plugin-metagen
  eleventyConfig.addPlugin(metagen);

  // Add the MarkdownIt plugin for 11ty.
  eleventyConfig.setLibrary(
    'md',
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    }).use(markdownItAttrs)
  );

  // Add the favicon plugin for 11ty.
  // https://github.com/NJAldwin/eleventy-plugin-gen-favicons
  eleventyConfig.addPlugin(favicons, {
    outputDir: './site',
  });

  // Add collections! This assists in pulling in various collections in the
  // blog, such as posts and tags.
  eleventyConfig.addPlugin(collectionPostList);
  eleventyConfig.addPlugin(collectionTagList);

  // Add date filters to make it a little easier to write dates.
  eleventyConfig.addPlugin(filterDate);

  // Watch for changes to assets, such as images or style sheets, and refresh
  // the website.
  eleventyConfig.addWatchTarget('./source/_scss/**/*.scss');

  // Send any static assets in the source directory to the built site.
  eleventyConfig.addPassthroughCopy({
    './source/_images/': '_assets/images/',
    './source/_webfonts/': '_assets/webfonts/',
    './source/_deploy/*test*.*': '_deploy/test/',
    './source/_deploy/*production*.*': '_deploy/production/',
  });
}

export const config = {
  templateFormats: ['njk', 'md', 'html'],
  htmlTemplateEngine: 'njk',
  markdownTemplateEngine: 'njk',

  // These are the folders that 11ty will use when compiling the built site.
  // The directories for `input` and `output` are relative to the root of the
  // project. The directories for `data`, `includes`, and `layouts` are
  // relative to the `input` directory, i.e. `source`.
  dir: {
    input: 'source',
    data: '_data',
    includes: '_includes',
    layouts: '_layouts',
    output: 'site',
  },
};
