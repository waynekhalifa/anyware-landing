import type { NextPage } from "next";

import Featured from "@/components/Featured";

import Head from "next/head";
import Header from "@/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Anyware Software</title>
        <meta name="description" content={"Asten College"} />
      </Head>
      <Header />
      <Featured />
    </>
  );
};

export default Home;
