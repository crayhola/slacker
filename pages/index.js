import React, { Fragment } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Slacker starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-4 shadow rounded bg-white">
        <h1 className="text-purple-500 leading-normal">Slacker starter</h1>
        <p className="text-gray-500">Next.js + Tailwind CSS ❤️</p>
      </div>
    </Fragment>
  );
}
