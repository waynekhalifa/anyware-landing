import type { NextPage } from "next";

import HomeFeatures from "@/components/Featured";

import Head from "next/head";
import Header from "@/components/Header";
import TRS from "@/components/TRS/TRS";
import useApp from "@/hooks/useApp";
import { Pages } from "@/constants/enums";
import Footer from "@/components/Footer/Footer";

const Home: NextPage = () => {
  const { slug } = useApp();

  return (
    <>
      <Head>
        <title>Anyware Software</title>
        <meta name="description" content={"Anyware Software"} />
      </Head>
      <Header />
      <HomeFeatures />
      <Footer/>
    </>
  );
};

export default Home;
