import {
  smartcity,
  angularlogo,
  awslogo,
  csslogo,
  htmllogo,
  javascriptlogo,
  nodejslogo,
  php,
  react,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
import { FaAppStoreIos } from "react-icons/fa";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#features",
  },
  {
    id: "1",
    title: "Case Study",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Cloud",
    url: "#how-to-use",
  },

  {
    id: "3",
    title: "Career",
    url: "#roadmap",
  },

  {
    id: "4",
    title: "contact Us",
    url: "#signup",
    onlyMobile: true,
  },

  {
    id: "5",
    title: "About Us",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Custom Web Development",
  "Mobile App Development",
  "Digital Marketing",
  "SEO Optimization",
  "Responsive Web Design",
  "E-commerce Solutions",
  "Cybersecurity Solutions",

];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: htmllogo,
    width: 63,
    height: 46,
  },
  {
    id: "1",
    title: "Notion",
    icon: php,
    width: 63,
    height: 46,
  },
  {
    id: "2",
    title: "Discord",
    icon: javascriptlogo,
    width: 63,
    height: 56,
  },
  {
    id: "3",
    title: "nodejs",
    icon: nodejslogo,
    width: 63,
    height: 46,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: react,
    width: 45,
    //  height: 60,
  },
  {
    id: "5",
    title: "Protopie",
    icon: csslogo,
    width: 63,
    height: 46,
  },
  {
    id: "6",
    title: "Framer",
    icon: awslogo,
    width: 63,
    height: 56,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: angularlogo,
    width: 63,
    height: 46,
  },
];

export const pricing = [

  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Web Development",
    text:"Allows users to seamlessly navigate and interact with websites without encountering unnecessary barriers.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon2,
    
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "App Development ",
    text: "The app leverages advanced coding techniques and user-centric design to deliver an intuitive and seamless user experience.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Digital Marketing",
    text: "Engage with audiences across various platforms and devices, ensuring your brand's message is accessible and impactful.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Seo Optimization",
    text: "Enables users to easily find your content at the top of search results without needing to browse through multiple pages." ,
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "UI/UX Designer", 
    text:"Enables users to quickly locate answers with intuitive Figma-designed interfaces, minimizing the need for extensive searching.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Game  Development",
    text: "The game employs sophisticated algorithms to interpret player actions and deliver dynamic and engaging gameplay experiences.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];



export const cases = [
  {
    id: "0",
    title: "Smart Green City ",
    text:"Allows users to seamlessly navigate and interact with websites without encountering unnecessary barriers.",
    backgroundUrl: "./src/assets/hero/smartcity.avif",
    url: "smartcity",
    iconUrl: benefitIcon2,
    
    // imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Online School Learning Platform",
    text: "The app leverages advanced coding techniques and user-centric design to deliver an intuitive and seamless user experience.",
    backgroundUrl: "./src/assets/hero/schoolproject.avif",
    url:"schoollearing",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Hotel Booking",
    text: "Engage with audiences across various platforms and devices, ensuring your brand's message is accessible and impactful.",
    backgroundUrl: "./src/assets/hero/hotelbooking.avif",
    url:"hotelbooking",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Media Distribution Platform",
    text: "Enables users to easily find your content at the top of search results without needing to browse through multiple pages." ,
    backgroundUrl: "./src/assets/hero/mediadistribution.webp",
    url:"media",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Retail & Ecommerce", 
    text:"Enables users to quickly locate answers with intuitive Figma-designed interfaces, minimizing the need for extensive searching.",
    backgroundUrl: "./src/assets/hero/retail.webp",
    url:"retail",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Cloud & Devops",
    text: "The game employs sophisticated algorithms to interpret player actions and deliver dynamic and engaging gameplay experiences.",
    backgroundUrl: "./src/assets/hero/devops.webp",
    url:"cloud",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

// export const socials = [
//   {
//     id: "0",
//     title: "Discord",
//     iconUrl: discordBlack,
//     url: "#",
//   },
//   {
//     id: "1",
//     title: "Twitter",
//     iconUrl: twitter,
//     url: "#",
//   },
//   {
//     id: "2",
//     title: "Instagram",
//     iconUrl: instagram,
//     url: "#",
//   },
//   {
//     id: "3",
//     title: "Telegram",
//     iconUrl: telegram,
//     url: "#",
//   },
//   {
//     id: "4",
//     title: "Facebook",
//     iconUrl: facebook,
//     url: "#",
//   },
// ];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://telegram.org",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com",
  },
];
