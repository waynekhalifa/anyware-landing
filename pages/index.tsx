import type { NextPage } from "next";

import HomeFeatures from "@/components/Featured";

import Head from "next/head";
import Header from "@/components/Header";
import useApp from "@/hooks/useApp";
import Footer from "@/components/Footer/Footer";
import { useDispatch } from "react-redux";
import { MenuItem1, getMenusByName } from "@/services/menu";
import { useEffect } from "react";
import { setListing as setMenus } from "@/store/menuSlice";
import ReactGA from "react-ga";

const Home: NextPage = () => {
  const { slug } = useApp();
  const dispatch = useDispatch();
  ReactGA.initialize("G-YBR7CRY471");

  useEffect(() => {
    const fetchMainMenu = async () => {
      const mainMenu: MenuItem1[] = await getMenusByName("main-navigation");
      dispatch(setMenus(mainMenu));
    };

    fetchMainMenu();
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Anyware Software</title>
        <meta name="description" content={"Anyware Software"} />
      </Head>

      <Header />
      <HomeFeatures />
      <Footer />
    </>
  );
};

export default Home;
