export const quotes = [
  {
    id: 1,
    bg: "bgFirst", // Update all bg values to match Tailwind CSS classes
    name: "Steve Jobs",
    SaidQuote:
      "The people who are crazy enough to think they can change the world are the ones who do",
  },
  {
    id: 2,
    bg: "bgSecond",
    name: "Winston Churchill",
    SaidQuote: "If you're going through hell, keep going",
  },
  {
    id: 3,
    bg: "bgThird",
    name: "Paulo Coelho",
    SaidQuote:
      "There is only one thing that makes a dream impossible to achieve: the fear of failure",
  },
  {
    id: 4,
    bg: "bgFourth",
    name: "Eleanor Roosevelt",
    SaidQuote: "Do one thing every day that scares you.",
  },
];

export const links = [
  { linkName: "First", linkHref: "/", bg: "bgF" },
  { linkName: "Second", linkHref: "/", bg: "bgS" },
  { linkName: "Third", linkHref: "/", bg: "bgT" },
  { linkName: "Fourth", linkHref: "/", bg: "bgFou" },
];

export const components: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Main",
    href: "/",
    description: "Main Page",
  },
  {
    title: "Home",
    href: "/home",
    description: "Still working on It",
  },
  {
    title: "Test",
    href: "/test",
    description: "a page for testing Stuff",
  },

  {
    title: "Post",
    href: "/post",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Chatbot",
    href: "/Chatbot",
    description: "a chat bot Page connected to The Open Ai",
  },
];

export const navLinks = [
  {
    title: "Compelete FullStack Projects Page",
    href: "/important",
    description:
      "showcasing my own fullStack Projects using many new Thechnologies and linked Github Source Code and Deployed Link ....",
  },
  {
    href: "/weather",
    title: "Weather",
    description: "Weather API which shows the weather of a city with Details",
  },
  {
    href: "/calculator",
    title: "Calculator",
    description: "Still Working On it",
  },
  {
    href: "/clock",
    title: "Calender",
    description: "Showcasing a calender from FullCalender Site",
  },
  {
    href: "/Todo",
    title: "Message me",
    description: "just a simple test for showinf the Crud Functionality",
  },
];

export const posts = [
  {
    id: 11,
    border: "border-teal-500",
    bg: "natural",
    title: "Natural life",
    href: "https://github.com/Mahtabvariyani/NaturalLife",
    description:
      "NaturalLife Store is a web application that allows a family (Farm FamilyHack) in a village to sell their products online. Each season brings different offers and products for users to browse and order. The website also provides weather information using an API and allows both registered and non-registered users to contact the family.",

    category: { title: "Live", href: "#" },
    author: {
      name: "Natural Life",
      role: "Github Source Code",
      href: "https://github.com/Mahtabvariyani/NaturalLife",
    },
    techs: {
      name: "Tech",
      Language: "Handlebars , Cloudinary (for media handling)",
      FrontEnd: "Node.js , Express , Bcrypt , Passport , Nodemailer , Multer , Mongoose ,MongoDB , Morgan ,Axios",
      UI: "Vanila CSS , Bootstrap",
    },
  },
  {
    id: 12,
    border: "border-teal-500",
    bg: "api",
    title: "API",
    href: "https://labtop-blog.vercel.app/",
    description:
      "An interconnected web application with diverse pages, each linked to various APIs for comprehensive testing and functionality. Explore different API integrations across each page, showcasing the dynamic interaction with varied external services.",

    category: { title: "Live", href: "#" },
    author: {
      name: "Api App",
      role: " Github Source Code",
      href: "https://github.com/Mahtabvariyani/APi",
    },
    techs: {
      name: "Tech",

      Language: "Nextjs ,JavaScript",
      FrontEnd: "API ,Axios",
      UI: "Tailwind CSS , CSS",
    },
  },
  {
    id: 13,
    border: "border-teal-500",
    bg: "wecode",
    title: "We Code",
    href: "https://we-dev.vercel.app/sign-up?redirect_url=https%3A%2F%2Fwe-dev.vercel.app%2F",
    description:
      "ConnectDev is a collaborative platform designed for developers to connect, communicate, collaborate, and code together. It offers a space for developers to ask questions, share knowledge, and work on coding projects in real-time. With built-in authentication powered by Clerk, users can create or join communities of up to 5 members to work together seamlessly.",

    category: { title: "Live", href: "#" },
    author: {
      name: "WeCode App",
      role: "Github Source Code",
      href: "https://github.com/Mahtabvariyani/WeCode",
    },
    techs: {
      name: "Tech",
      Language: "Nextjs,JavaScript",
      FrontEnd: "Authentication , MongoDB, Mongoose, Axios ,Redux , Moment ,Clerk",
      UI: "Tailwind CSS , CSS",
    },
  },
  {
    id: 14,
    border: "border-teal-500",
    bg: "bg-Aapi",
    title: "Renting App",
    href: "https://carrenting-app.vercel.app/",
    description:
      "This is a small Renting app that is connected to the Api so the user can search and find a car to rent ",

    category: { title: "Live", href: "#" },
    author: {
      name: "Renting Car App",
      role: " Github Source Code",
      href: "https://github.com/Mahtabvariyani/Renting-App",
    },
    techs: {
      name: "Tech",

      Language: "Nextjs,TypeScript",
      FrontEnd: "API, Axios",
      UI: "Tailwind CSS,CSS",
    },
  },
  {
    id: 16,
    border: "border-teal-500",
    bg: "ski",
    title: "Ski Wear Shop",
    href: "https://skiwearshop.vercel.app/",
    description:
      "A Small Commerce App without Authentication for justy trying and testing the App having a Stripe testing payment and adding the Products and APi  with Sanity",

    category: { title: "Live", href: "#" },
    author: {
      name: "Ski-Wear app",
      role: "Github Source Code",
      href: "https://github.com/Mahtabvariyani/skiwearshop",
    },
    techs: {
      name: "Tech",

      Language: "Nextjs,TypeScript",
      FrontEnd: "Sanity,Stripe",
      UI: "Tailwind CSS ,CSS",
    },
  },
  {
    id: 17,
    border: "border-teal-500",
    bg: "fendous",
    title: "Fendous Website",
    href: "https://chat-bot-landing-page.vercel.app/",
    description:
      "A Website for Fendous Company in Denmark which  i  created it  according to their needs and requests",

    category: { title: "Live", href: "#" },
    author: {
      name: "Fendous App",
      role: "Github Source Code",
      href: "https://github.com/Mahtabvariyani/Chat-bot-Landing-Page",
    },
    techs: {
      name: "Tech",

      Language: "Nextjs,TypeScript",
      FrontEnd: "MongoDB ,Mongoose ,Authentication, Axios ,API ",
      UI: "Tailwind CSS , CSS",
    },
  },
  {
    id: 18,
    border: "border-teal-500",
    bg: "bg-Quiz",
    title: "Quiz App",
    href: "https://coding-quiz-nine.vercel.app/",
    description:
      "few Days back i was trying to Find an app or a website to do few Quiz about JavaScript or TypeScript or ... i didnt find so i made it myself (Its still not Completed im working on it)",

    category: { title: "Live", href: "#" },
    author: {
      name: "Quiz App",
      role: "Github Source Code",
      href: "https://github.com/Mahtabvariyani/CodingQuiz",
    },
    techs: {
      name: "Tech",

      Language: "Nextjs,TypeScript",
      FrontEnd: "-",
      UI: "Tailwind CSS , CSS",
    },
  },
  {
    id: 18,
    border: "border-teal-500",
    bg: "bg-Quiz",
    title: "IT Event App",
    href: "https://mah-event-app.vercel.app/",
    description:
      "an App for the Developers so they can make an Event and make their own price and then even buying the other events , and there is also posts so they can read Related",

    category: { title: "Live", href: "#" },
    author: {
      name: "IT Event App",
      role: "Github Source Code",
      href: "https://github.com/Mahtabvariyani/eventApp",
    },
    techs: {
      name: "Tech",
      Language: "Nextjs,TypeScript",
      FrontEnd: "Uploadthing, Stripe, MongoDB, Mongoose , Sanity , Clerk",
      UI: "Tailwind CSS ,CSS",
    },
  },
];

export const footerLinks = [
  {
    name: "Daily Dev",
    href: "https://app.daily.dev/",
  },
  {
    name: "Hashnode",
    href: "https://hashnode.com/",
  },
  {
    name: "Code Wars",
    href: "https://www.codewars.com/",
  },
];

export const profiles = [
  {
    name: "Protfolio",
    href: "https://mahtab-variyani-profile.vercel.app/",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/mahvariyani/",
  },
  {
    name: "Github",
    href: "https://github.com/Mahtabvariyani",
  },
];
