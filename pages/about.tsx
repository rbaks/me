import Container from 'components/Container';
import { siteMetadata } from 'data/siteMetadata';

export default function About() {
  return (
    <Container title="About – Lee Robinson">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              LinkedIn:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={siteMetadata.social.linkedin}
              >
                @arabakoson
              </a>
            </li>
            <li>
              GitHub:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={siteMetadata.social.github}
              >
                @rbaks
              </a>
            </li>
            <li>
              Facebook:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={siteMetadata.social.facebook}
              >
                Andrianina Rabakoson
              </a>
            </li>
            <li>
              Email me:{' '}
              <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>
            </li>
            <li>
              <a href="AndrianinaResume.pdf" download="AndrianinaResume">
                Download my Resume
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Headline</h3>
          <p>Andrianina Rabakoson, Software developer and blogger</p>
          <h3>Long, 3rd Person</h3>
          <p>
            Lee Robinson is the Director of Developer Relations at{' '}
            <a href="http://vercel.com/">Vercel</a>, where he helps developers
            build a faster web and leads the Next.js community. Prior to that,
            Lee was a Senior Software Engineer focused on the frontend. An
            educator, writer, and speaker, Lee has also created extensive
            courses on React and Next.js.
          </p>
          <h3>Long, 1st Person</h3>
          <p>
            Hey, I'm Lee. I lead Developer Relations at{' '}
            <a href="https://vercel.com/">Vercel</a>, where my team helps
            developers build a faster web. I'm a Next.js contributor and help
            lead our open-source communities. I've passionate about frontend
            development and have created courses on React, Next.js, and web
            development. I'm an advisor and investor in early stage startups.
          </p>
          <h3>Short, 3rd Person</h3>
          <p>
            Lee Robinson is the Director of Developer Relations at{' '}
            <a href="http://vercel.com/">Vercel</a>, where he helps developers
            build a faster web.
          </p>
          <h3>Short, 1st Person</h3>
          <p>
            Hey, I'm Lee. I lead Developer Relations at{' '}
            <a href="https://vercel.com/">Vercel</a>, where my team helps
            developers build a faster web.
          </p>
          <h3>Education</h3>
          <p>
            Andrianina Rabakoson graduated in 2021 from IT University of
            Madagascar with a BS in Computer Engineering.
          </p>
        </div>
      </div>
    </Container>
  );
}
