export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Betfelagi',
        desc: 'Bet felagi is a website that will let you find houses and also lets your houses .you can create an account an post a house .',
        subdesc:
            'Built with React.js  Tailwind CSS, Nodejs,MongoDB  and Betfelagi is designed for optimal performance and scalability.',
        href: 'https://betfelagi.vercel.app/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/logo.ico',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'MongoDB',
                path: '/assets/mongodblogo.png',
            },
            {
                id:4,
                name:'Node.js',
                path:'/assets/nodejs.png'
            }
            
        ],
    },
    {
        title: 'Movie Explorer',
        desc: 'Discover and explore a wide range of movies and TV shows with our user-friendly interface.',
        subdesc:
            'With Movie Explorer, users can browse through an extensive library of movies and TV series, filter by categories, and view detailed information about each title. Built with React and TailwindCSS for a modern and responsive design.',
        href: 'https://movie-recommender1.vercel.app', // Replace with your actual project link or demo
        texture: '/textures/project/movie-explorer.mp4', // Video showcasing your app
        logo: '/assets/movieweblogo.jpg', // Logo for your app
        logoStyle: {
            backgroundColor: '#121212', // Dark background for modern look
            border: '0.2px solid #1f1f1f', // Subtle border
            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.5)', // Slight shadow for depth
        },
        spotlight: '/assets/spotlight2.png', // Spotlight image for showcasing your app
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: '/assets/tailwindcss.png',
            },
            {
                id: 5,
                name: 'OMDB Movie Database API',
                path: '/assets/moviedb.png', // Logo or icon for the movie API used
            },
        ],
    },
    
    {
        title: 'Amdesilase Sunday School',
        desc: 'Amdesilase Sunday School is a registration website for Students and it is currently being used .',
        subdesc:
            'It is buit with react.js ,MaterialUI ,MongoDB ,css and provides registration for students of the Sunday School',
        href: 'https://amdesilase.vercel.app',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/amdesilaselogo.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 3,
                name: 'MongoDB',
                path: '/assets/mongodblogo.png',
            },
            {
                id:4,
                name:'Node.js',
                path:'/assets/nodejs.png'
            }
        ],
    },
    
        
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];