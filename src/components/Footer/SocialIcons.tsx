import { List } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

import SocialItem from "./SocialItem";

const Component: React.FC = () => {
  return (
    <List
      disablePadding
      sx={{
        display: "flex",
        alignItems: "center",
        pt: 1,
        pb: 1,
      }}
    >
      {[
        {
          id: 1,
          href: "https://www.facebook.com/",
          icon: <FacebookOutlinedIcon />,
        },
        {
          id: 2,
          href: "https://instagram.com/",
          icon: <InstagramIcon />,
        },
      ].map((item: any) => (
        <SocialItem key={item.id} icon={item.icon} href={item.href} />
      ))}
    </List>
  );
};

export default Component;
