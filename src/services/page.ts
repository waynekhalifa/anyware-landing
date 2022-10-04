const pages: any[] = [
  {
    id: 1,
    name: "home",
    path: "/",
    thumbnail: "/images/logo-red.png",
    content: "home",
  },
  {
    id: 2,
    name: "About Us",
    path: "/about-us",
    thumbnail: "/images/logo-red.png",
    content: `
		<h2>About Asten College</h2>
		<p>Welcome to Asten College, a Microsoft digital transformation school that provides a rigorous 
British education. We offer our students and staff the chance to enhance their expertise in 
digital education through our global digital platforms that stand in the frontline of 
educational progression.</p>
<p>Our Core 24 approach entails a values-based education which shapes our principles and 
central beliefs. With the wide range of co-curricular programmes offered at Asten College, we 
focus on each learner’s pastoral, social and emotional needs. We are committed to 
independent thought and the pursuit of excellence in providing a well-rounded education. </p>
<h2>About Asten Hub:</h2>
<p>Stemming from our belief that every child is a “Champion in Life”, student life at Asten College 
represents an integral aspect of our school community. Asten offers an array of after-school 
extracurricular activities that include events; earth studies; coding and robotics; national 
sports tournaments; art and music tournaments; national and international trips and more. 
</p>
<img src="/images/asten-hub.jpeg"/>
		`,
  },
  {
    id: 3,
    name: "Academic Journey",
    path: "/academic-journey",
    thumbnail: "/images/logo-red.png",
    content: ``,
  },
  {
    id: 4,
    name: "Admissions",
    path: "/admissions",
    thumbnail: "/images/logo-red.png",
    content: `
		<p>Thank you for your interest in Asten College. Admissions open from Monday, October 16th, 
2022 for EYFS –Year 8.  
Office hours:  Sunday - Thursday from 8:00 am until 3:00 pm.  
</p>
<p>For registration, please use the link below.</p>
<p><a href="https://2w79fp3aee4.typeform.com/to/ouHggmMS" target="_blank">https://2w79fp3aee4.typeform.com/to/ouHggmMS</a></p>
<p>Contact Us:  </p>
<p><strong>Phone number:</strong>  010-3333-4460  </p>
<p><strong>Email:</strong> Info@astencollege.com </p>
<p><strong>Address:</strong> Taj Sultan, Block 3, Building 21, Flat 13, Nasr City, Cairo, Egypt<br>
Building 77, El Teseen Street, Fifth Settlement, New Cairo, Egypt</p>
		`,
  },
  {
    id: 5,
    name: "Contact Us",
    path: "/contact-us",
    thumbnail: "/images/logo-red.png",
    content: "Contact Us",
  },
];

export async function listPages() {
  try {
    const listing = pages.filter((page: any) => page.path !== "/");

    return listing;
  } catch (err: any) {
    console.log(err);
  }
}

export async function pagesBySlug(slug: string) {
  try {
    const page = pages.find((page) => page.path === slug);

    return page === undefined ? null : page;
  } catch (err: any) {
    console.log(err);
  }
}
