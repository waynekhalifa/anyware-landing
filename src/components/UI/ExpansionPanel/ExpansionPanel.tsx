import { ReactNode } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { primaryMain } from "../../../constants/colors";

interface Props {
  expanded: string;
  panelNumber: string;
  title: string;
  handleChange: any;
  children: ReactNode;
}

const ExpansionPanel: React.FC<Props> = ({
  expanded,
  panelNumber,
  title,
  handleChange,
  children,
}) => (
  <Accordion
    expanded={expanded === panelNumber}
    onChange={handleChange(panelNumber)}
    sx={{
      borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      "&:last-of-type": {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
      boxShadow: "none",
      "&:before": {
        display: "none",
      },
    }}
  >
    <AccordionSummary
      aria-controls="panel1d-content"
      id="panel1d-header"
      sx={{
        color: (theme) => primaryMain(theme),
        "& .MuiAccordionSummary-expandIconWrapper": {
          transform: "rotate(90deg)",
        },
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
          transform: "rotate(-90deg)",
        },
      }}
      expandIcon={
        <ArrowForwardIosSharpIcon
          sx={{ fontSize: "0.9rem", color: (theme) => primaryMain(theme) }}
        />
      }
    >
      <Typography
        sx={{ ml: expanded === panelNumber ? 1 : 0 }}
        fontWeight={500}
      >
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails
      sx={{
        padding: 2,
        borderTop: "1px solid rgba(0, 0, 0, .125)",
      }}
    >
      {children}
    </AccordionDetails>
  </Accordion>
);

export default ExpansionPanel;
