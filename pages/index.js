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
        <div className="sm:w-3/5 text-justify font-medium w-full">
          <p>Hello community,</p>

          <p>It’s been more than five years since we’ve started this community and it has ballooned to a size we never would have dreamed of. As demand for a community like ours expands, we feel the need to change how we administer invitations to the space. We’re revamping the invitation system as well as our website.</p>

          <p><span className="underline">Here’s what this means:</span> we’re going to pause the application process while we're doing this work. But we’ll be back very soon! If you've applied before this hiatus, don't worry. You will hear from us very soon.</p>

          <p className="italic">-The JOC slack admins</p>
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
