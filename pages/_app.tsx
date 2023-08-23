import Head from "next/head";
import App, { AppContext, AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "@/theme";
import createEmotionCache from "@/helpers/createEmotionCache";
import { wrapper } from "@/store/store";
import { setListing as setMenus } from "@/store/menuSlice";
import { GlobalStyles, Typography } from "@mui/material";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import MainModal from "@/components/UI/MainModal";
import { Provider, useDispatch, useSelector } from "react-redux";
import { selectModalOpen } from "@/store/appSlice";
import { getMenusByName, MenuItem1 } from "@/services/menu";
import { FC, useEffect } from "react";
import { initializeApp } from "firebase/app";


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;
  
  const firebaseConfig = {
    apiKey: "AIzaSyAlqlIJy_psLxACxmRf5nYU0CLA7oj96mI",
    authDomain: "hospitality-digitization.firebaseapp.com",
    projectId: "hospitality-digitization",
    storageBucket: "hospitality-digitization.appspot.com",
    messagingSenderId: "1078672455768",
    appId: "1:1078672455768:web:b8dfbdb530e0cb3f42722d",
    measurementId: "G-YBR7CRY471"
  };
  
  
  
  
      const app = initializeApp(firebaseConfig);

  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // const modalOpen = useSelector(selectModalOpen);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchMainMenu = async () => {
  //     const mainMenu: MenuItem1[] = await getMenusByName("main-navigation");
  //     dispatch(setMenus(mainMenu));
  //   };

  //   fetchMainMenu();
  // }, [dispatch]);
  return (
    <Provider store={store}>
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <GlobalStyles
          styles={{
            ".content p": {
              margin: "0px 0px 8px 0px",
              fontSize: "1.2rem",
            },
            ".content ul": {
              margin: "0px",
              padding: "0px",
              fontSize: "1.2rem",
              paddingLeft: "24px",
            },

            ".content ul li": {
              marginBottom: "8px",
            },
            ".MuiAccordionSummary-root .MuiAccordionSummary-content": {
              margin: "12px 8px !important",
            },

            ".MuiAccordionSummary-root .MuiAccordionSummary-content.Mui-expanded":
              {
                margin: "12px 8px !important",
              },
            ".MuiAccordionSummary-root.Mui-expanded": {
              minHeight: "0 !important",
            },
            ".MuiAccordionSummary-root.Mui-expanded .MuiTypography-root": {
              marginLeft: "0 !important",
            },
            "@keyframes lds-ellipsis1": {
              "0%": {
                transform: "scale(0)",
              },
              "100%": {
                transform: "scale(1)",
              },
            },
            "@keyframes lds-ellipsis3": {
              "0%": {
                transform: "scale(1)",
              },
              "100%": {
                transform: "scale(0)",
              },
            },
            "@keyframes lds-ellipsis2": {
              "0%": {
                transform: "translate(0, 0)",
              },
              "100%": {
                transform: "translate(24px, 0)",
              },
            },
            
          }}
        />
        <Component {...pageProps} />
         <MainModal />
      </ThemeProvider>
    </CacheProvider>
    </Provider>

  );
}

// MyApp.getInitialProps = wrapper.getInitialAppProps(
  // (store) => async (appContext: AppContext) => {
  //   const ctx = await App.getInitialProps(appContext);

  //   const mainMenu: MenuItem1[] = await getMenusByName("main-navigation");
 

  //   store.dispatch(setMenus(mainMenu));

  //   return { ...ctx };
//   }
// );
// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//   async (appContext: AppContext) => {
//     const ctx = await App.getInitialProps(appContext);

//     const mainMenu: MenuItem1[] = await getMenusByName("main-navigation");
 

//     store.dispatch(setMenus(mainMenu));

//     return { ...ctx };
//     }
// );

export default MyApp;
