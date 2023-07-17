import Head from "next/head";
import type { NextPage } from "next";

import Login from "@/components/Login";
import useApp from "@/hooks/useApp";
import { Pages } from "@/constants/enums";
import Survey from "@/components/Survey";
import { wrapper } from "@/store/store";
import { setListing as setQuestions } from "@/store/questionSlice";
import { setListing as setFeatures } from "@/store/featureSlice";
import { listQuestions } from "@/services/question";
import { listFeatures } from "@/services/feature";
import { setSlug } from "@/store/appSlice";
import TRS from "@/components/TRS/TRS";
import AboutUs from "@/components/AboutUs/AboutUs";
const PageTemplate: NextPage = () => {
  const { slug } = useApp();
  return (
    <>
      <Head>
        <title>Anyware Software | {slug}</title>
        <meta name="description" content={"Anyware Software"} />
      </Head>
      {slug === Pages.LOGIN && <Login /> }
      {slug === Pages.SURVEY &&  <Survey />}
      {slug === Pages.TRS &&  <TRS />}
      {slug === Pages.AboutUs &&  <AboutUs />}

    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here

      const data = await Promise.all([listQuestions(), listFeatures()]);

      store.dispatch(setSlug(params!.slug));
      store.dispatch(setQuestions(data[0]));
      store.dispatch(setFeatures(data[1]));

      return { props: {} };
    }
);

export default PageTemplate;
