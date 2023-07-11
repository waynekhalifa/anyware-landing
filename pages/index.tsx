import type { NextPage } from "next";

import HomeFeatures from "@/components/Featured";

import Head from "next/head";
import Header from "@/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Anyware Software</title>
        <meta name="description" content={"Anyware Software"} />
      </Head>
      <Header />
      <HomeFeatures />
    </>
  );
};

export default Home;
