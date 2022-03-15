import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '../.contentlayer/generated/allBlogs.mjs';

const siteMetadata = {
  author: {
    name: 'Andrianina Rabakoson'
  },
  siteUrl: 'https://andr.is-a.dev/me'
}

async function generate() {
  const feed = new RSS({
    title: `${siteMetadata.author.name}`,
    site_url: `${siteMetadata.siteUrl}`,
    feed_url: `${siteMetadata.siteUrl}/feed.xml`
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `${siteMetadata.siteUrl}/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
