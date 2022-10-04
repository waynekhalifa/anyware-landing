import { SyntheticEvent, useState } from "react";
import ExpansionPanel from "../UI/ExpansionPanel";
import HtmlContent from "../UI/HtmlContent";

const AcademicContent: React.FC = () => {
  const [expanded, setExpanded] = useState<string>("panel1");

  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : "");
    };
  return (
    <>
      <ExpansionPanel
        expanded={expanded}
        panelNumber={`panel1`}
        handleChange={handleChange}
        title={"Learn about our Early Years Programme"}
      >
        <HtmlContent
          content={`<p>(EYFS Curriculum- ages 3.6- 5.6)</p>
		<p>Learning is a continuous process of discovery in an ongoing journey. Following the National 
Curriculum of England, the Early Years Foundation Stage (EYFS) Programme aims to develop 
every learner’s ability to the best they can.  
</p>
<p>Our topic-based curriculum is carefully designed with engaging themes that trigger our young 
learners’ curiosity, exposing them to a variety of play-based activities that contribute to the 
development of language communication, social skills as well as knowledge. The Early 
Learning Goals are completed by the end of EYFS as a part of early years’ profile.  
</p>
<p>
Formative ongoing assessments through observations and close monitoring for attainment 
allow our teachers to track the progress of academic achievement of all learners.  
</p>
<p>By the end of reception, children are assessed against the Early Learning Goals to ensure a 
smooth transition to Year 1.  
</p>
<img src="/images/image1.jpeg"/>`}
        />
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded}
        panelNumber={`panel2`}
        handleChange={handleChange}
        title={"Learn about our Primary Programme"}
      >
        <HtmlContent
          content={`<p>Key Stage 1 – ages 5-7 (Years 1 and 2)  </p>
		<p>Key Stage 2 – ages 7-11 (Years 3-6) </p>
		<p>We offer a broad and varied British curriculum based on best practices and a skill-based 
integrated scheme covering every learner’s unique school journey, from the age of 5 to 11. 
This curriculum is delivered to promote a combination of tradition and innovation through an 
education that is highly recognized worldwide. </p>
<p>To enhance this learning process, we adopt digital and enrichment resources endorsed by 
Cambridge Primary.  These resources are designed to trigger and intellectually stimulate our 
students’ desire to learn, lead and master skills beyond the confines of a classroom. 
</p>
<p>Learning is no one size fits all; our learning environment is set up around the belief that we 
take into consideration the different types of learners; reinforce all types of interests; and 
appeals of every student.  
</p>
<p>So, our students go through a wide variety of experiences where they work collaboratively 
with their peers; constantly re-think rather than remember; and communicate confidently 
and effectively.​</p>
<p>Our academic staff strike a balance between offering our students relational and supported 
learning, developing their emotional intelligence and cognition. 
</p>
<img src="/images/image2.jpeg"/>`}
        />
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded}
        panelNumber={`panel3`}
        handleChange={handleChange}
        title={"Learn about our Secondary Programme – (ages 11- 17)"}
      >
        <HtmlContent
          content={`<p>Asten College’s secondary offers the Cambridge International Curriculum, a programme noted 
both for its academic excellence and its flexibility. Recognized and respected worldwide, it 
prepares students for success both at university and beyond.</p>
<p>The secondary programme is divided into two cycles. </p>
<p>Lower Secondary 11-14 years old Lower Secondary 11-14 years old </p>
<p>Upper Secondary: 14-17 years old </p>
<ol>
<li>The first cycle – Lower Secondary –Key stage 3 (years 7-9), students cover the 
following subjects English, Mathematics, Science, Global Perspective, Foreign 
Languages, Arabic Studies, Computing and Coding, and an array of electives (PE, 
Art, Music).  
</li>
<li>
<p>The second cycle – Upper Secondary- Key Stage 4 
</p>
<ul>
<li>Cambridge O level (years 10 -12), students prepare for their IGCSE exams 
(International General Certificate of Secondary Education), a series of 
Cambridge international qualifications covering a broad range of courses that 
include Cambridge O level  English Language, Mathematics, Commerce, Biology, 
Chemistry, Physics, Foreign Languages, Economics, Accounting, Computer 
Science, Information and Communication Technology, History, and Geography. 
</li>
<li>Cambridge A level (year 11 and or 12), students prepare for their A Level exams 
giving access to further studies and universities throughout the world. A level 
subjects include Mathematics, Biology, Chemistry, Physics, Business, 
Economics, Accounting, Computer Science Information Technology, 
International History, Geography, Psychology, and Law. 
All secondary courses are offered by distinguished professional IG teachers.</li>
</ul>
</li>
</ol>
<img src="/images/image3.jpeg"/>`}
        />
      </ExpansionPanel>
    </>
  );
};

export default AcademicContent;
