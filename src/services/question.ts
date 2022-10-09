const question: any[] = [
  {
    id: 1,
    title: "Welcome, XXXXXX !",
    hasFeatures: false,
    hasDropZone: false,
    hasDropdown: false,
    content: `
			<p>Our promise is to make your life much easier.</p>
			<p>This will only take a minute.</p>
		`,
    buttonText: `Let's do it!`,
  },
  {
    id: 2,
    title: "Customize your Restaurant's App!",
    hasFeatures: false,
    hasDropZone: true,
    hasDropdown: false,
    content: `
			<ul>
				<li>Drop an image</li>
				<li>Choose your primary colors</li>
			</ul>
		`,
    buttonText: `Continue`,
  },
  {
    id: 3,
    title:
      "How do you want to start using Anyware Software digitization platform?",
    hasFeatures: true,
    hasDropZone: false,
    hasDropdown: true,
    content: `<p><strong>Pick up your features</strong> – <strong>Customize your branded App</strong></p>`,
    buttonText: `Continue`,
  },
  {
    id: 4,
    title: "",
    hasFeatures: false,
    hasDropZone: false,
    hasDropdown: false,
    content: `<p>Thank you for your precious time! Now we're done and one of our representatives will contact you shortly.</p>`,
    buttonText: `Get a 30-minute Product Tour`,
  },
];

export async function listQuestions() {
  try {
    return question;
  } catch (err: any) {
    console.log(err);
  }
}
