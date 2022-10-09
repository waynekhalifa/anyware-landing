import Box from "@mui/material/Box";

interface Props {
  content: string;
}

const HtmlContent: React.FC<Props> = ({ content }) => {
  return (
    <Box className="content" dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default HtmlContent;
