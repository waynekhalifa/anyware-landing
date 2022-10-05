import Head from "next/head";
import type { NextPage } from "next";

import Login from "@/components/Login";
import useApp from "@/hooks/useApp";
import { Pages } from "@/constants/enums";
import Survey from "@/components/Survey";

const PageTemplate: NextPage = () => {
  const { slug } = useApp();
  return (
    <>
      <Head>
        <title>Anyware Software | {slug}</title>
        <meta name="description" content={"Anyware Software"} />
      </Head>
      {slug === Pages.LOGIN ? <Login /> : <Survey />}
    </>
  );
};

export default PageTemplate;
