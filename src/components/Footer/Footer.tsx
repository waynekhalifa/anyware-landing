import { Box, Grid, Link, List, Typography } from "@mui/material";
import IconLink from "../UI/IconLink";
import OneColumn from "../UI/OneColumn";

import { commonWhite } from "../../constants/colors";

import headerLogo from "@images/header-logo.png";
import Logo from "../Logo";
import CopyRight from "./CopyRight";
import SocialIcons from "./SocialIcons";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/appSlice";

const homes: any[] = [{ id: 1, name: "About us", path: "/about-us" }];

const actionButtons: any[] = [
  {
    id: 2,
    name: "Microsoft digital transformation school",
    title: "Microsoft digital transformation school",
    path: "/",
    content: `
      <blockquote>“Now more than ever your students deserve equitable access to technology”- Microsoft</blockquote>
      <p>We proudly announce that Asten College is a Microsoft digital transformation school. Our partnership with Microsoft enhances the learning experience to provide our students with the fundamental digital transformation skills.  </p>
      <p>Microsoft Education provides schools with solutions, technologies and education expertise to accelerate opportunities for all learners.</p>
      `,
  },
  {
    id: 3,
    name: "Campus",
    title: "Campus",
    path: "/",
    content: `
      <p>Our campus is strategically located on a 20,000 m2 plot of land within Taj City. Our location is distinguished as it is in the heart of Cairo –Suez International Road.</p>
      <p>We are central to many destinations:</p>
      <ul>
      <li>Few minutes away from Heliopolis, First Settlement, and Nasr City.</li>
      <li>15 minutes away from Fifth Settlement</li>
      <li>25 minutes away from Shorouk and Madinty.</li>
      <li>Opposite of Kempinski and JW Marriott Hotels with two direct entrances to the ring road.</li>
      </ul>
      <p>Our campus is designed by Gensler, a global architecture firm in the United Kingdom with over 50 locations worldwide.  Gensler aids schools to purposely provide a safe, healthy, and equitable learning environment.</p>
      <p><a href="https://www.gensler.com/expertise/education" target="_blank">https://www.gensler.com/expertise/education<a></p>
      `,
  },
  {
    id: 4,
    name: "BalancED",
    title: "BalancED",
    path: "/",
    content: `
      <blockquote>Building Professional learning Communities (PLC)</blockquote>
      <p>Balanced Education Company (BalancED) is one of Egypt's leading establishments in the field of education. Our scope of work includes establishing, managing, and operating educational institutions.  </p>
      <p>We also provide various educational services, including but not limited to, educational consultancy, certified professional development programmes for staff, school leaders, and school evaluations. </p>
      <p>Stemming from our balanced approach belief, our students learning is aligned with international standards while preserving their own culture and identity. </p>
      `,
  },
];

const Footer: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = (action: any) => {
    dispatch(openModal({ name: "actionButton", content: { ...action } }));
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "#333132",
        color: (theme) => commonWhite(theme),
      }}
    >
      <OneColumn>
        <Grid container>
          <Grid item xs={12} sm={6} md={3}>
            <Logo imgSrc={headerLogo} />
            <Link
              underline="none"
              color="inherit"
              variant="h6"
              href="tel:01033334460"
              sx={{ display: "block", mt: 3 }}
            >
              01033334460
            </Link>
            <Box sx={{ mt: 3 }}>
              <Typography>Follow Us:</Typography>
              <SocialIcons />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <List disablePadding sx={{ mt: { xs: 3, sm: 0 } }}>
              {homes.map((link: any) => (
                <IconLink
                  key={link.id}
                  disableMargin={true}
                  display="flex"
                  color={"#fff"}
                  hoverColor={"#fff"}
                  linkText={link.name}
                  linkSlug={link.path}
                />
              ))}
              {actionButtons.map((link: any) => (
                <IconLink
                  key={link.id}
                  disableMargin={true}
                  display="flex"
                  color={"#fff"}
                  hoverColor={"#fff"}
                  linkText={link.name}
                  linkSlug={link.path}
                  onClick={() => handleClick(link)}
                />
              ))}
            </List>
          </Grid>
        </Grid>
      </OneColumn>
      <CopyRight />
    </Box>
  );
};

export default Footer;
