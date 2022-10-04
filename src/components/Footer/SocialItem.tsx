import { Box, Link } from "@mui/material";

interface Props {
  icon: React.ReactNode;
  href: string;
}

const SocialItem: React.FC<Props> = ({ icon, href }) => {
  return (
    <Box
      component="li"
      sx={{
        lineHeight: 0,
        mr: 1,
        background: "rgba(0,0,0,0.24)",
        p: "4px",
        borderRadius: "3px",
      }}
    >
      <Link
        color={"inherit"}
        underline="none"
        href={href}
        target={"_blank"}
        rel="noreferrer"
      >
        {icon}
      </Link>
    </Box>
  );
};

export default SocialItem;
