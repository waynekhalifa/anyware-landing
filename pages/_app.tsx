import Head from "next/head";
import App, { AppContext, AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/helpers/createEmotionCache";
import { wrapper } from "@/store/store";
import { setListing as setMenus } from "@/store/menuSlice";
import MainModal from "@/components/UI/MainModal";
import { useSelector } from "react-redux";
import { selectModalOpen } from "@/store/appSlice";
import { getMenusByName, MenuItem } from "@/services/menu";

import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const modalOpen = useSelector(selectModalOpen);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Component {...pageProps} />
      {modalOpen && <MainModal />}
    </CacheProvider>
  );
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (appContext: AppContext) => {
    const ctx = await App.getInitialProps(appContext);

    const mainMenu: MenuItem[] = await getMenusByName("main-navigation");

    store.dispatch(setMenus(mainMenu));

    return { ...ctx };
  }
);

export default wrapper.withRedux(MyApp);
