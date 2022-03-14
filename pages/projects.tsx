import Container from 'components/Container';
import { siteMetadata } from 'data/siteMetadata';

export default function Dashboard() {
  return (
    <Container
      title={`Projects – ${siteMetadata.author.name}`}
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects page comming soon
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I work a lot on small personal projects that are first usefull for
            me.
          </p>
        </div>
        <div className="flex flex-col w-full"></div>
      </div>
    </Container>
  );
}
