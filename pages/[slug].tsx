import type { NextPage } from "next";
import { wrapper } from "@/store/store";
import { listPages, pagesBySlug } from "@/services/page";
import { selectSelected, setPage, setPages } from "@/store/pageSlice";

import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import PageContent from "@/components/PageContent";
import { useSelector } from "react-redux";
import NotFound from "@/components/404";
import Head from "next/head";

const PageTemplate: NextPage = () => {
  const page = useSelector(selectSelected);

  return (
    <>
      <Head>
        <title>Asten College - {page.name}</title>
        <meta name="description" content={"Asten College"} />
      </Head>
      <PageHeader />
      {page === null ? <NotFound /> : <PageContent />}
      <Footer />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here

      const data = await Promise.all([
        listPages(),
        pagesBySlug(`/${params!.slug}`),
      ]);

      await Promise.all([
        store.dispatch(setPages(data[0])),
        store.dispatch(setPage(data[1])),
      ]);

      return { props: {} };
    }
);

export default PageTemplate;
