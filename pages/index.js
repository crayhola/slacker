import React, { Fragment } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col h-screen p-8">
      <Head>
        <title>Journalists of Color</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center h-full">
      <img
          className="pb-4"
          src={'./logo-desktop.svg'}
        />
        <div className="w-3/5 text-center font-medium">
          <p>We're getting a remodel! In the meantime, we've decided to pause applications for the JOC Slack. We know it's an important resource for many so we will be back very soon. </p>
          <p>If you applied before we closed the form, you should hear from us really soon. Your application didn't end up into the ether. We promise.</p>
        </div>
     
      </main>
      <footer>
        <div id="vercel-sponsorship">
          Powered by{" "}
          <a href="https://vercel.com/?utm_source=crayhola&utm_campaign=oss">
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
