export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a career in freelancing.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Geni.ai - A PDF chat buddy",
    des: "Explore your PDF files without actually reading them. Upload it and ask question from AI about PDF.",
    img: "/Geni-ai.jpg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/stripe-icon.svg",
      "/prisma.svg",
      "/c.svg",
    ],
    link: "https://geni-rohc3zw3o-iasadks-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Uplug.me - A Extension to make you more focused.",
    des: "Make you life more focused by enabling unplug.me and block distracting or doom scrolling website.",
    img: "/Unplug.jpg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/extension-icon.svg",
      "/javascript.svg",
    ],
    link: "",
  },
  {
    id: 3,
    title: "E waste Facilities Locator - SIH 2023 Hackathon (IInd Position) ",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/e-waste.jpg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/jwt.svg",
      "/shadcn.png",
      "/mapbox.svg",
    ],
    link: "/ui.apple.com",
  },
  {
    id: 4,
    title: "A Youtube Clone",
    des: "A basic youtube clone I made 2 years back while learning MERN stack. Using Rapid API",
    img: "/youtube-clone.jpg",

    iconLists: ["/re.svg", "/tail.svg", "/api.svg"],
    link: "https://willowy-sopapillas-d29fd6.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "MERN stack developer",
    desc: "Contributed to the development of a dynamic web platform using the MERN stack.Played a key role in enhancing user interactivity through advanced React.js features and efficient state management",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Open Source Contributor",
    desc: "Contributed to open-source projects utilizing the MERN stack and modern tech stacks.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Projects",
    desc: "Led the dev of a web app for a client, from initial concept to deployment on private VPS.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Social Media Content Creator",
    desc: "Volunteered at E-Cell, Galgotias University, managing social media to boost online following and organizing events to enhance the organization's success and visibility.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/iasadk",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "https://x.com/iasad0017",
    img: "/twit.svg",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/mohammad-asad-khan/",
    img: "/link.svg",
  },
];
