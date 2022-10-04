import type { NextPage } from "next";
import { wrapper } from "@/store/store";
import { listPages } from "@/services/page";

import Featured from "@/components/Featured";

import { setPages } from "@/store/pageSlice";
import Head from "next/head";
import Header from "@/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Asten College</title>
        <meta name="description" content={"Asten College"} />
      </Head>
      <Header />
      <Featured />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const data = await Promise.all([listPages()]);
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      await store.dispatch(setPages(data[0]));
      return {
        props: {
          authState: false,
        },
      };
    }
);

export default Home;
