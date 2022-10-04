import Image from "next/image";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Partners from "./Partners";
import OneColumn from "../UI/OneColumn";
import SectionTitle from "../UI/SectionTitle";
import IconLink from "../UI/IconLink";
import SectionContent from "../UI/SectionContent";

import section1Image from "@images/girl.jpg";
import membersLogo from "@images/members.png";
import section3Image from "@images/section3.png";
import appstore from "@images/appstore.png";
import Applications from "./Applications";
import Accreditation from "./Accreditation";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/appSlice";

const HomeSections: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      openModal({
        name: "actionButton",
        content: {
          id: 1,
          title: "Meet the team",
          link: "https://www.microsoft.com/en-gb/education",
          color: "#97282D",
          icon: "/images/icons/red.png",
          content: `
					<p>Dr. Salma El Bakry – Founder and Chairperson <br>25 years of experience in the education field.</p>
					<p>Mrs. Magda Abdel Moneim – School Consultant <br>52 years of experience in the education field.</p>
					<p>Dr. Mahmoud Hamza – Executive Manager <br>26 years of experience in the education field.</p>
					<p>Mr. Nabil Michel – Academic Director <br>27 years of experience in the education field.</p>
					<p>Dr. Sahar Fouad - School Principal <br>26 years of experience in the education field.</p>
					<p>Mrs. Sarah Khaled – Key Stages 1 & 2 Headteacher <br>20 years of experience in the education field.</p>
					<p>Mrs. Amira Samy – Foundation Stage Headteacher <br>21 years of experience in the education field.</p>
					<p>Ms. Jaylan Kotb – Head of Admissions <br>20 years of experience in the education field.</p>
					`,
        },
      })
    );
  };

  return (
    <Box sx={{ img: { maxWidth: "100%", height: "auto" } }}>
      <OneColumn background="white" disablePadding={true}>
        <Grid container columnSpacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ mb: { xs: 8, md: 0 } }}
          >
            <Box
              sx={{
                img: { maxWidth: "100%", height: "auto", display: "block" },
              }}
            >
              <Image src={section1Image} alt="logo" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { xs: 2, sm: 0 }, pr: { xs: 2, sm: 0 } }}>
              <SectionTitle maxWidth="240px" text="Get Quality Education" />
              <SectionContent
                text="We offer a comprehensive British education. Our curriculum is delivered to promote a combination of tradition and innovation through an education that is highly recognized worldwide.  
Asten College’s distinctive academic programme aims to encourage our learner’s lifelong 
enthusiasm for discovery. Our curriculum scheme is based on integrating digital technology, 
values- based learning, skills, innovative enquiry, and cross curricular approaches that allow 
our learners to make connections, synthesize knowledge and develop advanced research-
based skills.  
By the time students graduate from Asten College, they will have reached their best potential 
and acquired a set of values and beliefs qualifying them to meet the challenges of the real 
world.  
 
We accept students from Early Years Foundation Stage (EYFS) -Year 8. "
              />
              {/* <IconLink
                display="flex"
                color="#97282D"
                hoverColor="#97282D"
                linkSlug="#"
                linkText="Learn more"
                end={<KeyboardArrowRightIcon fontSize="small" />}
              /> */}
            </Box>
          </Grid>
        </Grid>
      </OneColumn>

      <OneColumn>
        <SectionTitle text={`Core 24 Approach`} maxWidth={"100%"} />
        <SectionContent
          text="Asten College’s Core 24 approach is a framework of values that we believe is essential for the 
advancement of students to become champions in life. We embed values-based learning 
practices within the academic, athletic, and extra-curricular activities of each key stage. 
Adopted from “The Leader in Me” Programme, our Core 24 philosophy is an integral part of 
all our practices. In 2021, Asten College partnered with Franklin Covey, one of the most 
trusted consulting and training leadership institutes worldwide, to transform and build 
exceptional leaders, teams and cultures.  
"
        />
        <a
          href="https://www.franklincovey.com/ "
          target={"_blank"}
          rel="noreferrer"
        >
          https://www.franklincovey.com/
        </a>
        <Applications />
      </OneColumn>

      <OneColumn background="white" disablePadding={true}>
        <Grid container columnSpacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ mb: { xs: 8, md: 0 } }}
          >
            <Box
              sx={{
                img: { maxWidth: "100%", height: "auto", display: "block" },
              }}
            >
              <Image src={membersLogo} alt="logo" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                color: "text.secondary",
                pl: { xs: 2, sm: 0 },
                pr: { xs: 2, sm: 0 },
              }}
            >
              <SectionTitle maxWidth="240px" text="Meet the team" />
              <Typography gutterBottom>
                <Typography
                  gutterBottom
                  component="span"
                  sx={{ display: "block" }}
                >
                  Dr. Salma El Bakry – Founder and Chairperson
                </Typography>
                <Typography
                  gutterBottom
                  component="span"
                  sx={{ display: "block" }}
                >
                  25 years of experience in the education field.
                </Typography>
              </Typography>
              <Typography gutterBottom>
                <Typography
                  gutterBottom
                  component="span"
                  sx={{ display: "block" }}
                >
                  Mrs. Magda Abdel Moneim – School Consultant
                </Typography>
                <Typography
                  gutterBottom
                  component="span"
                  sx={{ display: "block" }}
                >
                  52 years of experience in the education field.
                </Typography>
              </Typography>
              <Typography gutterBottom>
                <Typography
                  gutterBottom
                  component="span"
                  sx={{ display: "block" }}
                >
                  Dr. Mahmoud Hamza – Executive Manager
                </Typography>
                <Typography
                  gutterBottom
                  component="span"
                  sx={{ display: "block" }}
                >
                  26 years of experience in the education field.
                </Typography>
              </Typography>
              <IconLink
                display="flex"
                color="#97282D"
                hoverColor="#97282D"
                linkSlug="#"
                linkText="Learn more"
                onClick={handleClick}
                end={<KeyboardArrowRightIcon fontSize="small" />}
              />
            </Box>
          </Grid>
        </Grid>
      </OneColumn>

      <OneColumn>
        <SectionTitle text={`Our Partnerships`} maxWidth={"100%"} />
        <Partners />
      </OneColumn>

      <OneColumn background="white">
        <SectionTitle
          text={`Applying for accreditation for UK International Qualifications`}
          maxWidth={"100%"}
        />
        <Accreditation />
      </OneColumn>

      <OneColumn>
        <Grid container columnSpacing={4} alignItems={"center"}>
          <Grid item xs={12} md={6} sx={{ mb: { xs: 8, md: 0 } }}>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: 190,
                height: 96,
                mb: 4,
                ml: -4,
              }}
            >
              <Image src={appstore} alt="logo" />
            </Box>
            <SectionTitle maxWidth="288px" text="Asten Mobile Application" />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ position: "relative", overflowX: "hidden" }}
          >
            <Box
              sx={{
                display: { md: "none" },
                width: 190,
                height: 96,
                position: "absolute",
                top: 0,
                right: -24,
              }}
            >
              <Image src={appstore} alt="logo" />
            </Box>
            <Box
              sx={{
                width: 544,
                maxWidth: "100%",
                img: { maxWidth: "100%", height: "auto", display: "block" },
              }}
            >
              <Image src={section3Image} alt="logo" />
            </Box>
          </Grid>
        </Grid>
        <Typography
          align="center"
          variant="h3"
          component="p"
          sx={{ mt: { xs: 6, md: 0 } }}
        >
          Stay tuned
        </Typography>
      </OneColumn>

      <OneColumn background="white">
        <Container
          maxWidth={"sm"}
          sx={{
            display: "flex",
            jutifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <SectionTitle
            text={`Every Update Matters`}
            maxWidth={"100%"}
            align="center"
          />
          <SectionContent
            align="center"
            text="Join our first general orientation commencing on Monday, September 26th, 2022 at 6:00 pm. Meet the team, our guest speakers and learn about Asten College. Looking forward to seeing you at the JW Marriot, Chephren Hall. "
          />

          <Button
            variant="contained"
            disableElevation
            {...({ component: "a" } as any)}
            href="https://2w79fp3aee4.typeform.com/astencollege?typeform-source=www.canva.com"
            target="_blank"
          >
            To register click here
          </Button>
        </Container>
      </OneColumn>
    </Box>
  );
};

export default HomeSections;
