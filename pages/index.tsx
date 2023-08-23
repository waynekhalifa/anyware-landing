import type { NextPage } from "next";

import HomeFeatures from "@/components/Featured";

import Head from "next/head";
import Header from "@/components/Header";
import useApp from "@/hooks/useApp";
import Footer from "@/components/Footer/Footer";
import { useDispatch } from 'react-redux';
import { MenuItem1, getMenusByName } from "@/services/menu";
import { useEffect } from "react";
import { setListing as setMenus } from "@/store/menuSlice";
import { useRouter } from "next/router";
import useIsMobile from "@/hooks/useIsMobile";

const Home: NextPage = () => {
  const { slug } = useApp();
  const dispatch = useDispatch();
  const router = useRouter()
  const {windowLoaded,width,isMobile} = useIsMobile()
  useEffect(() => {
    router.prefetch("/");
    router.prefetch("/Table-Reservation-System");
    router.prefetch("/Kiosk");
    router.prefetch("/CashlessWallet");
    router.prefetch("/IntegrationServices");
    router.prefetch("/CustomSoftware");
    router.prefetch("/AboutUs");
    router.prefetch("/becomepartner");
  }, [router]);
  useEffect(() => {
    const fetchMainMenu = async () => {
      const mainMenu: MenuItem1[] = await getMenusByName("main-navigation");
      dispatch(setMenus(mainMenu));
    };

    fetchMainMenu();
  }, [dispatch]);
  return (
    width>0 && <>
      <Head>
        <title>Anyware Software</title>
        <meta name="description" content={"Anyware Software"} />
      </Head>
      
      <HomeFeatures />
      
    </>
  );
};

export default Home;
