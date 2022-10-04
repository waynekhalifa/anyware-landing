import Image from "next/image";
import { useDispatch } from "react-redux";
import { Box, Container, Grid, Typography } from "@mui/material";

import { openModal } from "@/store/appSlice";

const ActionButtons: React.FC = () => {
  const dispatch = useDispatch();

  const actions: any[] = [
    {
      id: 1,
      title: "School Philosophy",
      link: "https://www.microsoft.com/en-gb/education",
      color: "#97282D",
      icon: "/images/icons/red.png",
      content:
        "<p>Asten College provides a rigorous research-based British education that empowers our learners with knowledge, comprehensive skills and readiness to effectively compete in the evolving world.</p><p>Through technology transformation, Asten College embraces an educational philosophy that emphasises on personalised learning experiences.</p><p>We adopt the Core 24 approach, our values-based education, which enhances human effectiveness and enables each learner to develop their fundamental life skills.</p>",
    },
    {
      id: 2,
      title: "School Campus",
      link: "https://tajcity.info",
      color: "#0D436B",
      icon: "/images/icons/blue.png",
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
      id: 3,
      title: "Microsoft Digital Transformation",
      link: "https://www.gensler.com/about",
      color: "#F5A81D",
      icon: "/images/icons/yellow.png",
      content: `
      <blockquote>“Now more than ever your students deserve equitable access to technology”- Microsoft</blockquote>
      <p>We proudly announce that Asten College is a Microsoft digital transformation school. Our partnership with Microsoft enhances the learning experience to provide our students with the fundamental digital transformation skills.  </p>
      <p>Microsoft Education provides schools with solutions, technologies and education expertise to accelerate opportunities for all learners.</p>
      `,
    },
    {
      id: 4,
      title: "BalancED School",
      link: "#",
      color: "#1B5633",
      icon: "/images/icons/green.png",
      content: `
      <blockquote>Building Professional learning Communities (PLC)</blockquote>
      <p>Balanced Education Company (BalancED) is one of Egypt's leading establishments in the field of education. Our scope of work includes establishing, managing, and operating educational institutions.  </p>
      <p>We also provide various educational services, including but not limited to, educational consultancy, certified professional development programmes for staff, school leaders, and school evaluations. </p>
      <p>Stemming from our balanced approach belief, our students learning is aligned with international standards while preserving their own culture and identity. </p>
      `,
    },
  ];

  const handleClick = (action: any) => {
    dispatch(
      openModal({ name: "actionButton", content: { ...action, icon: null } })
    );
  };

  return (
    <Box
      sx={{
        background: { xs: "white", md: "transparent" },
        pt: { xs: 3, md: 0 },
        position: { md: "absolute" },
        bottom: { md: 0 },
        left: { md: 0 },
        right: { md: 0 },
        zIndex: { md: "2" },
      }}
    >
      <Container maxWidth="md">
        <Grid container columnSpacing={2} sx={{ paddingTop: "10px" }}>
          {actions.map((action: any) => (
            <Grid item key={action.id} xs={6} md={3}>
              <Box
                sx={{
                  background: action.color,
                  marginBottom: 3,
                  transition: ".3s ease",
                  borderRadius: "4px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Box
                  // underline="none"
                  // color="inherit"
                  // href={action.link}
                  // target="_blank"
                  onClick={() => handleClick(action)}
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    p: { xs: 2, md: 3 },
                    cursor: "pointer",
                    color: "common.white",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "common.white",
                      width: 48,
                      height: 48,
                      borderRadius: "4px",
                      mb: 3,
                      mr: "auto",
                      ml: { xs: "auto", md: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        color: action.color,
                        p: 1,
                        lineHeight: 0,
                      }}
                    >
                      <Image
                        src={action.icon}
                        alt={action.title}
                        width={32}
                        height={32}
                      />
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      color: "white",
                      mb: { md: 2 },
                      minHeight: { xs: 72, sm: 48 },
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    {action.title}
                  </Typography>
                  <Box
                    sx={{
                      background: "common.white",
                      width: 40,
                      height: 2,
                      mb: 2,
                      display: { xs: "none", md: "block" },
                    }}
                  />
                  <Typography
                    sx={{
                      color: "common.white",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    Learn more
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ActionButtons;
