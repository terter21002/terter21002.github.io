import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nextjs,
  nodejs,
  republika,
  mixtra,
  bnis,
  thread,
  promptopia,
  movieland,
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
    id: "skill",
    title: "Skill",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    title: "HTML",
    experience: "1 Year",
    icon: html,
  },
  {
    title: "CSS",
    experience: "1 Year",
    icon: css,
  },
  {
    title: "JavaScript",
    experience: "1 Year",
    icon: javascript,
  },
  {
    title: "TypeScript",
    experience: "6 Month",
    icon: typescript,
  },
  {
    title: "Tailwind",
    experience: "1 Year",
    icon: tailwind,
  },
  {
    title: "Reactjs",
    experience: "1 Year",
    icon: reactjs,
  },
  {
    title: "Nextjs",
    experience: "6 Month",
    icon: nextjs,
  },
  {
    title: "Nodejs",
    experience: "6 Month",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Graphic Designer Intern",
    company_name: "PT. Republika Media Mandiri",
    icon: republika,
    iconBg: "#383E56",
    date: "January 2018 - May 2018",
    points: [
      "Creating Instagram feeds content using Adobe Photoshop for image content and Adobe Premiere Pro for video content.",
      "Creating magazine design using Adobe InDesgin.",
      "Creating Illustration using Adobe Illutrator.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "PT. Mixtra Inti Tekindo",
    icon: mixtra,
    iconBg: "#E6DEDD",
    date: "October 2022 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, project managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "BNI Sekuritas",
    icon: bnis,
    iconBg: "#383E56",
    date: "December 2023 - Present",
    points: [
      "Developing and maintaining micro frontend web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, project managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Thread Clone",
    description:
      "Thread Clone is a clone thread app by Meta. I created this program to learn Next.js framework, implementing server-side rendering, and integrating with a database.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: thread,
    source_code_link: "https://github.com/rendipandu/threads-clone",
    deployment_link: "https://threads-clone-developedbyren.vercel.app",
  },
  {
    name: "Promptopia",
    description:
      "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts. Implements OAuth for its authentication process.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/rendipandu/promptopia",
    deployment_link: "https://promptopia-developedbyren.vercel.app",
  },
  {
    name: "Movieland",
    description:
      "Movieland is a movie search program integrated with the OMDB API. This program is a simple project I created to learn how to integrate frontend with APIs.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "omdbapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movieland,
    source_code_link: "https://github.com/rendipandu/movieland",
    deployment_link: "https://rendipandu.github.io/movieland",
  },
];

export { technologies, experiences, projects };

