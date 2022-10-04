import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Box } from "@mui/material";

interface Props {
  imgSrc: StaticImageData;
}

const Logo: React.FC<Props> = ({ imgSrc }) => {
  return (
    <Box
      sx={{
        width: { xs: 120, md: 144 },
        img: { maxWidth: "100%", height: "auto" },
        cursor: "pointer",
      }}
    >
      <Link href="/">
        <a>
          <Image src={imgSrc} alt="logo" />
        </a>
      </Link>
    </Box>
  );
};

export default Logo;
