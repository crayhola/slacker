import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col p-8">
      <Head>
        <title>Journalists of Color</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center h-full mb-9">
        <img className="pb-4" src={"./logo-desktop.svg"} />

        <section
          id="about-us"
          className="sm:w-3/5 text-justify font-medium w-full mb-2"
        >
          <h2 className="font-bold text-left p-2">About us</h2>
          <p>
            You’ve found us! We are a community of Journalists of Color aka
            JOCs, and this website is for you – the public – to peruse, find out
            what we’re all about and maybe even join us.
          </p>

          <p>
            We created a Slack team to start gathering people and ideas, and we
            quickly learned a few things:
          </p>

          <ul>
            <li>
              <p>
                The media diversity struggle is <em>real</em> real in newsrooms
                across the country.
              </p>
            </li>
            <li>
              <p>
                The conversations we’re having are ones that need to be had on a
                wider scale.
              </p>
            </li>
            <li>
              <p>
                Members agree that a community like this is wanted and
                necessary.
              </p>
            </li>
          </ul>

          <p>
            We founded this group to put Journalists of Color in the same
            &quot;room&quot; (you know, so you’re not the{" "}
            <a
              href="http://www.npr.org/sections/codeswitch/2015/07/29/427190143/on-wyatt-cenac-key-peele-and-being-the-only-one-in-the-room"
              title="Key and Peele skit"
            >
              only one
            </a>
            .) And having a Slack team allows us to branch out and create
            infinite rooms to discuss a variety of topics, collaborate on
            projects or chat/scheme/vent privately via direct messages or
            private groups.
          </p>

          <p>
            We are dedicated to growing and expanding this community, and its
            conversations and opportunities. We’ve already branched out from
            Slack to a couple of meetups on the East and West coasts. So stay
            tuned because we’re just getting started.
          </p>
        </section>

        <section className="sm:w-3/5 text-justify font-medium w-full">
          <p>
            <button
              title="Join the JOC Slack community"
              id="join"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              <a
                className="text-white"
                href="https://forms.gle/1j4AhbL1A4HfPhij6"
              >
                Join JOC Slack
              </a>
            </button>
          </p>
        </section>
      </main>
      <footer>
        <div id="vercel-sponsorship">
          Powered by{" "}
          <a
            title="Sponsored and powered by Vercel"
            href="https://vercel.com/?utm_source=crayhola&utm_campaign=oss"
          >
            <img
              className="object-contain h-4 inline-block"
              src="/vercel.svg"
              alt="Sponsored and powered by Vercel"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
