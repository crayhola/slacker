import React, { Fragment } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-1">
      <Head>
        <title>Slacker starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow">
        <h1 className="text-purple-500 leading-normal">Slacker starter</h1>
        <p className="text-gray-500">Next.js + Tailwind CSS ❤️</p>
      </main>
      <footer>
        <div id="vercel-sponsorship">
          Powered by{" "}
          <img
            className="object-contain h-4 inline-block"
            src="/vercel.svg"
            alt="Sponsored and powered by Vercel"
          />
        </div>
      </footer>
    </div>
  );
}
