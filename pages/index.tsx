import HomePage from "@/components/HomePage";
import type { NextPage } from "next";

import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Anyware Software</title>
        <meta name="description" content={"Anyware Software"} />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
