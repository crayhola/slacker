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

        <section id="about-us" className="sm:w-3/5">
          <h2>About us</h2>
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
              The media diversity struggle is <em>real</em> real in newsrooms
              across the country.
            </li>
            <li>
              The conversations we’re having are ones that need to be had on a
              wider scale.
            </li>
            <li>
              Members agree that a community like this is wanted and necessary.
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

        <section id="invite" className="sm:w-3/5">
          <h2>Who's Invited</h2>
          <p>
            You are or identify as a person of color and work in journalism.
          </p>

          <p>
            “Work in journalism” = Do you identify as a journalist? Is your job
            something that helps to push journalism forward? Yeah? Sweet!
          </p>

          <p className="italic">
            Allies: While we appreciate your support, this space is for us.
            Check out{" "}
            <a href="#resources" title="Resources">
              our resources tab
            </a>{" "}
            for more ways to encourage diversity.
          </p>
        </section>

        <section id="rules" className="sm:w-3/5">
          <h2>The Rules</h2>
          <p>
            What happens in the JOCs Slack stays in the JOCs Slack – everything
            said or gif’d or bot’d is <strong>OFF THE RECORD</strong>. This is a
            safe space to talk about whatever, network, commune and support one
            another. Now, we’re all smart enough to know that nothing on the
            Interwebs is 100% safe or secure and we’re supposed to trust no one,
            so that’s where common sense comes in.
          </p>

          <p>
            In earlier discussions we agreed that the same decorum and
            discretion we apply to social media or professional listservs should
            be used in the all-access, public channels. Be respectful, don’t be
            a jerk, and help keep this space as accessible and inclusive as
            possible.
          </p>
        </section>

        <section id="join" className="sm:w-3/5">
          <h2>Join</h2>
          <p>Click the button below to join JOC!</p>
          <p>
            <button
              title="Join the JOC Slack community"
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

        <section id="resources" className="sm:w-3/5">
          <h2>Resources</h2>
          <ul>
            <li>
              <a
                href="https://twitter.com/juliachanb/lists/jocs"
                title="Journalists of Color Twitter List"
              >
                Our Twitter list
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1cTZNGyYjGEidmyzaIvdm2WHiclCWSlcqnyijNFynjD8/edit?usp=sharing"
                title="Our guide to dealing with online harassment"
              >
                Our guide to dealing with online harassment
              </a>
            </li>
          </ul>

          <h3>Some Style Guides</h3>

          <ul>
            <li>
              <a
                href="http://www.diversitystyleguide.com/"
                title="The Diversity Style Guide"
              >
                The Diversity Style Guide
              </a>
            </li>
            <li>
              <a
                href="http://www.aaja.org/coverageguide/"
                title="AAJA Guide to Covering Asian America"
              >
                AAJA Guide to Covering Asian America
              </a>
            </li>
            <li>
              <a
                href="http://www.nabj.org/?styleguide"
                title="NABJ Style Guide"
              >
                NABJ Style Guide
              </a>
            </li>
            <li>
              <a href="http://www.nlgja.org/stylebook/" title="NLGJA Stylebook">
                NLGJA Stylebook
              </a>
            </li>
            <li>
              <a
                href="http://www.glaad.org/reference"
                title="GLAAD Media Reference Guide"
              >
                GLAAD Media Reference Guide
              </a>
            </li>
          </ul>

          <h3>More JOC Organizations</h3>

          <ul>
            <li>
              <a
                href="http://www.aaja.org/"
                title="Asian American Journalists Association"
              >
                Asian American Journalists Association
              </a>
            </li>
            <li>
              <a
                href="http://www.nahj.org/"
                title="National Association of Hispanic Journalists"
              >
                National Association of Hispanic Journalists
              </a>
            </li>
            <li>
              <a
                href="http://www.nabj.org/"
                title="National Association of Black Journalists"
              >
                National Association of Black Journalists
              </a>
            </li>
            <li>
              <a
                href="http://www.nlgja.org/"
                title="The Association of LGBTQ Journalists"
              >
                The Association of LGBTQ Journalists
              </a>
            </li>
            <li>
              <a
                href="http://www.saja.org/"
                title="South Asian Journalists Association"
              >
                South Asian Journalists Association
              </a>
            </li>
          </ul>

          <h3>Other dope JOC projects</h3>

          <ul>
            <li>
              <a href="http://www.writersofcolor.org/" title="Writers of Color">
                Writers of Color
              </a>
            </li>
            <li>
              <a
                href="http://diversify.journalismwith.me/"
                title="Journalism Diversity Project"
              >
                Journalism Diversity Project
              </a>
            </li>
          </ul>
        </section>
        <footer className="w-full sm:w-3/5 my-5">
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
      </main>
    </div>
  );
}
