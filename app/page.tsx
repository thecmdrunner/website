export default function Home() {
  return (
    <div className="bg-github-bg p-5 selection:bg-gray-700 text-white">
      <header className="font-sans border border-github-fg-border bg-github-fg rounded-lg px-5 py-3 gap-3 justify-between flex flex-wrap">
        <h1 className="font-serif font-bold text-5xl bg-gradient-to-tr from-amber-300 to-purple-500 bg-clip-text text-transparent selection:text-white">
          Pranav Kulkarni
        </h1>
        <nav className="flex flex-wrap gap-5 items-center">
          <a
            title="Checkout my GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/thecmdrunner"
          >
            <svg
              className="fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>
          <a
            title="Tweet @ me"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/thecmdrunner"
          >
            <svg
              className="fill-white"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </a>
          <a
            title="Connect with me"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/pranavk7/"
          >
            <svg
              className="fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>
          <a
            title="Say hi via email"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:hey@pranava.dev"
          >
            <svg
              className="fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"></path>
            </svg>
          </a>
          <a
            title="Don't hesitate to call me"
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+919876543210"
          >
            <svg
              className="fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"></path>
            </svg>
          </a>
        </nav>
      </header>
      <hr className="rounded-full my-1.5 border-transparent" />
      <main className="font-sans">
        <article className="px-5 pt-3 pb-5 bg-github-fg border border-github-fg-border rounded-lg">
          <h2 className="text-2xl font-bold leading-loose pb-2">Tech Stack</h2>
          <ol className="sm:ml-6 space-y-6 list-none sm:list-decimal">
            <li>
              <h3 className="font-medium text-xl leading-relaxed">
                Technologies to build Full Stack Applications:
              </h3>
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://nextjs.org/"
              >
                Next.js
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.typescriptlang.org/"
              >
                Typescript
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://nodejs.org/"
              >
                Node.js
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://react.dev/"
              >
                React
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://tailwindcss.com/"
              >
                Tailwind CSS
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://trpc.io/"
              >
                tRPC
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="http://remotion.dev/"
              >
                Remotion
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://sass-lang.com/"
              >
                Scss/Sass
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://clerk.com/"
              >
                Clerk
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://auth0.com/"
              >
                Auth0
              </a>
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://supabase.com/"
              >
                Supabase
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.firebase.com/"
              >
                Firebase
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://planetscale.com/"
              >
                Planetscale
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mysql.com/"
              >
                MySQL
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.postgresql.org/"
              >
                PostgreSQL
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://redis.io/"
              >
                Redis
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mongodb.com/"
              >
                Mongo DB
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.prisma.io/"
              >
                Prisma ORM
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://orm.drizzle.team/"
              >
                Drizzle ORM
              </a>
            </li>
            <li>
              <h3 className="font-medium text-xl leading-relaxed">
                Artificial Intelligence and ML:
              </h3>
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://openai.com/"
              >
                OpenAI
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://replicate.com/"
              >
                Replicate
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://elevenlabs.io/"
              >
                Elevenlabs
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/features/copilot"
              >
                GitHub Copilot
              </a>
            </li>
            <li>
              <h3 className="font-medium text-xl leading-relaxed">
                Deployment and CI/CD:
              </h3>
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/"
              >
                GitHub Team Collaboration
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="vercel.com/"
              >
                Vercel
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.netlify.com/"
              >
                Netlify
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://railway.app/"
              >
                Railway
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="render.com"
              >
                Render
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.docker.com/"
              >
                Docker
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linode.com/"
              >
                Linode
              </a>
            </li>
            <li>
              <h3 className="font-medium text-xl leading-relaxed">
                Design Tools
              </h3>
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.figma.com/"
              >
                Figma
              </a>
              ·
              <a
                className="inline-block pr-1 hover:underline focus:underline active:underline font-mono leading-loose"
                target="_blank"
                rel="noopener noreferrer"
                href="https://excalidraw.com/"
              >
                Excalidraw
              </a>
            </li>
          </ol>
        </article>
        <hr className="rounded-full my-1.5 border-transparent" />
        <article className="px-5 pt-3 pb-5 bg-github-fg border border-github-fg-border rounded-lg">
          <h2 className="text-2xl font-bold leading-loose pb-2">Experience</h2>
          <ol className="sm:ml-6 space-y-6 list-none sm:list-decimal">
            <li>
              <h3 className="font-medium text-xl leading-relaxed">
                <a
                  className="inline-block hover:border-solid focus:border-solid active:border-solid leading-tight mb-3 border-dotted border-b"
                  rel="noopener noreferrer"
                  href="https://maxroom.co"
                >
                  Maxroom
                </a>
              </h3>
              <b>Full Stack AI Developer (2023)</b>
              <ul className="list-disc ml-4">
                <li>Integrated OpenAI and Replicate APIs.</li>
                <li>
                  Integrated various APIs - Text to speech, Image and video
                  generation, Payment Gateway, etc.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="font-medium text-xl leading-relaxed">
                <a
                  className="inline-block hover:border-solid focus:border-solid active:border-solid leading-tight mb-3 border-dotted border-b"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.remotion.dev"
                >
                  Remotion
                </a>
              </h3>
              <b>
                <a
                  className="inline-block hover:border-solid focus:border-solid active:border-solid leading-tight mb-3 border-dotted border-b"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.remotion.dev/experts/"
                >
                  Certified Remotion Expert (2023)
                </a>
              </b>
              <ul className="list-disc ml-4">
                <li>
                  Developed
                  <a
                    className="inline-block pr-1 hover:border-solid focus:border-solid active:border-solid leading-tight border-dotted border-b"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/thecmdrunner/remotion-gtts-template"
                  >
                    Text-to-Speech template
                  </a>
                  for the launch of Remotion v4. (OSS)
                </li>
              </ul>
            </li>
            <li>
              <h3 className="font-medium text-xl leading-relaxed">
                <a
                  className="inline-block hover:border-solid focus:border-solid active:border-solid leading-tight mb-3 border-dotted border-b"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://swiftube.vercel.app/"
                >
                  Swiftube
                </a>
              </h3>
              <b> Full Stack AI Developer (2023) </b>
              <ul className="list-disc ml-4">
                <li>
                  A tool that creates engaging presentation-styled videos using
                  AI.
                </li>
                <li>
                  Participated in
                  <a
                    className="inline-block pr-1 hover:border-solid focus:border-solid active:border-solid leading-tight border-dotted border-b"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://dev.to/devteam/announcing-the-github-dev-2023-hackathon-4ocn"
                  >
                    Dev.to Hackathon
                  </a>
                  .
                </li>
              </ul>
            </li>
            <li>
              <h3 className="font-medium text-xl leading-relaxed">
                <a
                  className="inline-block hover:border-solid focus:border-solid active:border-solid leading-tight mb-3 border-dotted border-b"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.vasavgroup.com/"
                >
                  Vasav Group
                </a>
              </h3>
              <b> Full Stack Web Developer (2023) </b>
              <ul className="list-disc ml-4">
                <li>Developed main marketing website.</li>
                <li>Worked on Admin Dashboard.</li>
              </ul>
            </li>
          </ol>
        </article>
        <hr className="rounded-full my-1.5 border-transparent" />
        <article className="px-5 pt-3 pb-5 bg-github-fg border border-github-fg-border rounded-lg">
          <h2 className="text-2xl font-bold leading-loose pb-2">Education</h2>
          <ol className="sm:ml-6 space-y-6 list-none sm:list-decimal">
            <li>
              <h3 className="font-medium text-xl leading-relaxed">
                Mechanical Engineering Diploma
              </h3>
              <p>Guru Gobind Singh Polytechnic</p>
              <p>2018 - 2021</p>
            </li>
            <li>
              <h3 className="font-medium text-xl leading-relaxed">Class X</h3>
              <p>R.J.E.M. High School</p>
              <p>Passing year - 2018</p>
            </li>
          </ol>
        </article>
      </main>
      <hr className="rounded-full my-1.5 border-transparent" />
    </div>
  );
}
