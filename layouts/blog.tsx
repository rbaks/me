import Image from '../components/Image';
import { parseISO, format } from 'date-fns';

import Container from 'components/Container';
// import Subscribe from 'components/Subscribe';
import type { PropsWithChildren } from 'react';
import type { Blog } from 'contentlayer/generated';
import { siteMetadata } from 'data/siteMetadata';
import Giscus from 'components/comments/Giscus';
import ShareButtons from 'components/share/ShareButtons';

const editUrl = (slug) =>
  `${siteMetadata.siteRepo}/edit/main/data/blog/${slug}.mdx`;
const articleUrl = (slug) => `${siteMetadata.siteUrl}/blog/${slug}`;

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Blog }>) {
  return (
    <Container
      title={`${post.title} – ${siteMetadata.author.name}`}
      description={post.summary}
      image={`${siteMetadata.siteUrl}${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt={siteMetadata.author.name}
              height={24}
              width={24}
              src={siteMetadata.author.image}
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {siteMetadata.author.name} /{' '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {post.readingTime.text}
          </p>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
        <div className="mt-8"></div>
        <div className="flex flex-row place-content-between w-full">
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <a
              href={editUrl(post.slug)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Edit this page on GitHub'}
            </a>
          </div>
          <div>
            <ShareButtons size={30} shareUrl={articleUrl(post.slug)} />
          </div>
        </div>
        <Giscus />
      </article>
    </Container>
  );
}
