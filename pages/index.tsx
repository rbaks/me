import Image from '../components/Image';
import Link from 'next/link';

import Container from '../components/Container';
import Subscribe from '../components/Subscribe';
import { siteMetadata } from '../data/siteMetadata';
import { InferGetStaticPropsType } from 'next';
import { allBlogs } from 'contentlayer/generated';
import { pick } from 'lib/utils';
import ProjectCard from 'components/ProjectCard';
import { projects } from 'data/projects';
import FeaturedPostCard from 'components/FeaturedPostCard';

export default function Home({
  featuredPosts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              {siteMetadata.author.name}
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              {siteMetadata.author.headLine}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              {siteMetadata.author.zingFactor}
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt={siteMetadata.author.name}
              height={176}
              width={176}
              src={siteMetadata.author.image}
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 text-black dark:text-white">
          Projects
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          {projects
            .slice(0, 2)
            .map(({ title, description, url, icon }, index) => (
              <ProjectCard
                key={index}
                title={title}
                description={description}
                href={url}
                icon={icon}
              />
            ))}
        </div>
        <Link href="/projects">
          <a className="flex mt-2 mb-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            See all projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          A compilation of my cherry picked favorite posts.
        </p>
        {featuredPosts.map(({ title, slug, publishedAt }, index) => (
          <FeaturedPostCard
            key={index}
            index={`0x${index}`}
            slug={slug}
            publishedAt={publishedAt}
            title={title}
          />
        ))}

        <Link href="/blog">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>

        <span className="h-8" />
        {/* <Subscribe /> */}
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const featuredPosts = allBlogs
    .map((post) =>
      pick(post, ['slug', 'title', 'featured', 'publishedAt', 'draft'])
    )
    .filter((post) => post.featured && !post.draft)
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { featuredPosts } };
}
