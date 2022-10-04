import Head from "next/head";
import type { NextPage } from "next";

import Login from "@/components/Login";

const PageTemplate: NextPage = () => {
  return (
    <>
      <Head>
        <title>Anyware Software | Login</title>
        <meta name="description" content={"Anyware Software"} />
      </Head>
      <Login />
    </>
  );
};

export default PageTemplate;
