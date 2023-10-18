import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  nobres,
  tesla,
  wait,
  ARA,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  R,
  habhub,
  BI,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "BI Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "R",
    icon: R,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Nobres Emp",
    icon: nobres,
    iconBg: "#383E56",
    date: "Jun 2023 - Aug 2023",
    Location: "Montes Claros,MG,Brasil",
    points: [
      " I played a pivotal role in bridging the gap between cutting-edge AI technology and our company's operations. By developing and implementing an innovative extension linked to ChatGPT.",
      " I led the creation of a comprehensive full-stack website that not only hosted our AI features but also provided a user-friendly interface for our clients and team members.",
      "My internship was marked by a commitment to innovation and a passion for making a meaningful impact.",
     
    ],
  },
  {
    title: "Front End Developer",
    company_name: "ARA Consulting",
    icon: ARA,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Aug 2022",
    points: [
      "I had the opportunity to develop a website for the company I was working for using React JS. The website serves as a hub of general information about the company, including the services they provide, news, and when they were founded.",
      "One of my main goals was to ensure that the website was well put together and visually appealing, so I put in a lot of effort to make it look polished and professional.",
      " I incorporated animations and graphics that complemented the content and provided a more engaging user experience.",
      
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "W.A. IT Advisory",
    icon: wait,
    iconBg: "#383E56",
    date: "Mar 2021 - Jul 2021",
    points: [
      "I developed a full-stack website using the MEVN (MongoDB, Express.js, Vue.js, and Node.js) stack. The website was designed to allow different types of users to manage their projects and handle details in an efficient way.",
      "I leveraged the power of the MEVN stack, which allowed me to easily build and deploy complex web applications.",
      "I believe that the website I developed will be a valuable tool for users to manage their projects and collaborate more efficiently.",
      
    ],
  },
 
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Habhub",
    description:
      "Web, Desktop, and Mobile app designed to enhance your dog ownership experience. Our platform helps you find your lost dog, facilitates dog adoption, connects dogs for mating, and offers a curated selection of dog products in our online store.",
    tags: [
      {
        name: "Symfony",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: habhub,
    source_code_link: "https://github.com/Azizchniti/HabHub-Website",
  },
  {
    name: "World Development Indicators",
    description:
      "This BI project involved conducting a comprehensive analysis of various indicators for every country in the world using CRISP-DM, using WDI dataset.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PowerBI",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: BI,
    // source_code_link: "https://github.com/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences,
  //  testimonials
    projects };
