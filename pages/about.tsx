import Container from 'components/Container';
import { siteMetadata } from 'data/siteMetadata';

export default function About() {
  return (
    <Container title={`About – ${siteMetadata.author.name}`}>
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
                My Resume
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Headline</h3>
          <p>
            <strong>Andrianina Rabakoson</strong>, Software developer and
            content creator
          </p>
          <h3>Summary</h3>
          <p>
            Fresh graduate of a top-tier university focused on designing and
            developing production ready software, analyzing and solving complex
            technical problems, self motivated and dedicated to learning and
            improving everyday.
          </p>
          <h3>Education</h3>
          <p style={{ fontStyle: 'italic' }}>
            Bachelor of Engineering, Software development, 2018 - 2021
          </p>
          <strong>IT University</strong>, Madagascar
          <ul>
            <li>Procedural and object oriented programming</li>
            <li>Software architecture design</li>
            <li>Relational Database modeling</li>
            <li>Full-stack web develoment</li>
            <li>Networking systems</li>
          </ul>
          <h3>Industry experience</h3>
          <strong>Ibonia</strong>, Madagascar
          <p style={{ fontStyle: 'italic' }}>Software developer intern</p>
          <p>
            Responsible for designing and developing an automated database
            migration command line tool for Moodle websites. Helped streamline
            the migration process to avoid costly and time consuming
            verifications. Documented and tested the tool for use in the
            company.
          </p>
          <h3>Award</h3>
          <strong>Hackathon greendev winner</strong>, Institut français de
          Madagascar
          <p style={{ fontStyle: 'italic' }}>Backend and chatbot developer</p>
          <p>
            Successfully shipped an image search engine for endemic species of
            Madagascar, showing dependency graphs in the process to better
            illustrate biodiversity. Participated in a team of five to create a
            Facebook Messenger chatbot interface for the search engine as well
            as the image recognition system.
          </p>
          <h3>Skills</h3>
          <ul>
            <li>
              <strong>Programming languages :</strong> Javascript, Typescript,
              Java, Python, C, Solidity
            </li>
            <li>
              <strong>Development Framework :</strong> React, Node, Next.js,
              Java Spring, Dapp tools
            </li>
            <li>
              <strong>Spoken languages :</strong> Malagasy, French (Native);
              English (Advanced)
            </li>
            <li>
              <strong>Operating systems :</strong> Fedora 35, Arch Linux,
              Windows
            </li>
          </ul>
          <h3>Areas of interest</h3>
          <ul>
            <li>Open source software</li>
            <li>Technical blogging</li>
            <li>Data Science</li>
            <li>Day trading</li>
            <li>Blockchain and Crypto</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
