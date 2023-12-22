import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Freelance Developer",
        company_name: "Self-Employ",
        icon: "./src/assets/images/238.png",
        iconBg: "#accbe1",
        date: "April 2021 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "IT Support Specialist",
        company_name: "LearnandPlay",
        icon: "./src/assets/images/learnandplay.png",
        iconBg: "#accbe1",
        date: "April 2022 - December 2022",
        points: [
            "Installed and troubleshooted hardware and software for the daycare center, resulting in a 20% reduction",
            "Established detailed instructions for specific hardware and software issues, reducing turnaround time.",
            "Conducted rigorous testing and efficient configuration of new hardware and software, reducing time",
        ],
    },
    {
        title: "IT Support Specialist",
        company_name: "Sara Crisp LLC",
        icon: "./src/assets/images/sc.png",
        iconBg: "#fbc3bc",
        date: "March 2020 - June 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",,
        ],
    },
    {
        title: "Multifaceted Employee",
        company_name: "AutoMax",
        icon: "./src/assets/images/Automax.png",
        iconBg: "#a2d2ff",
        date: "December 2017 - November 2018",
        points: [
            "Reduced search time by 30%, significantly improving productivity and customer satisfaction.",
            "Managed timely and reliable delivery of crucial items dealerships, fostering seamless operations.",
            "Provided exceptional technical support to facility management, resolving issues promptly.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/WWylie-Q',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/wwylie-q/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Mojo Caster',
        description: 'Developed a web application with Three.js that allows you to protect the diamond from demons with spells.',
        link: 'https://mojo-gules.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Learn and Play Landing Page',
        description: 'Created a Landing Page to convert visitors to potential clients',
        link: 'https://learnandplay.vercel.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Wylies SoleSurvivor',
        description: 'Designed and built a space-themed multidirectional shooter game , created with React.js.',
        link: 'https://solesurvivor.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Climate Control',
        description: 'Built a complete climate control, allowing users to change the weather, temperature, and scenery with push of a button.',
        link: 'https://climate-c.vercel.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Gold',
        description: 'Developed a web application of Goldfish, swimming around in a pool.',
        link: 'https://gold-omega.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: '3js Butterflies',
        description: 'Interactive web application with butterflies, created with Three.js.',
        link: 'https://3js-butterflies.vercel.app/',
    }
];