import { Suspense } from "react";
import Box from "@mui/material/Box";
import MainLoader from "../UI/MainLoader";
import { useSelector } from "react-redux";
import { selectSelected } from "@/store/pageSlice";
import HtmlContent from "../UI/HtmlContent";
import TwoColumn from "../UI/TwoColumn";
import ContactContent from "../ContactContent";
import AcademicContent from "../AcademicContent";

const PageContent: React.FC = () => {
  const page = useSelector(selectSelected);

  const renderPageContent = () => {
    if (page.path === "/contact-us") return <ContactContent />;

    return (
      <Box sx={{ minHeight: 300 }}>
        <TwoColumn slug={page.path}>
          {page.path === "/academic-journey" ? (
            <AcademicContent />
          ) : (
            <HtmlContent content={page.content} />
          )}
        </TwoColumn>
      </Box>
    );
  };

  return <Suspense fallback={<MainLoader />}>{renderPageContent()}</Suspense>;
};

export default PageContent;
