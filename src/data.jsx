import React from 'react';
import { FaLaptop, FaStore, FaBuilding, FaClock, FaGamepad, FaChartBar, FaDesktop, FaTrophy, FaMedal } from 'react-icons/fa';
import frontendOdeacy from './assets/frontendOdeacy.png';
import Forme from './assets/Forme.png';
import CinnamonKitchen from './assets/CinnamonKitchen.png';
import MagicBrick from './assets/MagicBrick.png';
import Clock from './assets/Clock.png';
import cert1 from './assets/Certificate1.pdf';
import cert2 from './assets/Certificate2.pdf';
import certImg1 from './assets/C1.png';
import certImg2 from './assets/C2.png';

export const projectList = [
    {
      id: 11,
      title: "Frontend Odyssey Hackathon",
      description: "A fully frontend interactive project developed for the Frontend Odyssey Hackathon. Built with React, featuring rich animations and an immersive UI/UX.",
      tags: ["React", "Animations", "Frontend"],
      link: "https://frontend-odyssey-8c6v.vercel.app/",
      videoLink: "https://youtu.be/hfGGrY0ZCOI?si=wvgJLxupQeqVSbG9",
      github: "https://github.com/utkarshkumarsinghcg-cmyk/Frontend-Odyssey",
      category: "Webpages",
      icon: <FaLaptop />,
      image: frontendOdeacy
    },
    {
      id: 4,
      title: "Forme-Clone",
      description: "A modern hardware solutions website showcasing tools, components, and technology essentials.",
      tags: ["HTML", "CSS"],
      link: "https://frome.netlify.app/",
      videoLink: "https://youtu.be/YicDrCGcrw4?si=WJygjlAix0Ow9vtq",
      github: "https://github.com/utkarshkumarsinghcg-cmyk/FORME_CLONE",
      category: "Webpages",
      icon: <FaDesktop />,
      image: Forme
    },
    {
      id: 5,
      title: "Cinnamon kitchen - Clone",
      description: "The gifting page of the website showcases a range of artisanal, healthy snack hampers and gift sets that can be shipped across India.",
      tags: ["HTML", "CSS"],
      link: "https://cinnamonkitchen-clone.netlify.app/",
      videoLink: "https://youtu.be/i_h8CI5B6Nc?si=rC1ERdR1VYUvMmXH",
      github: "https://github.com/utkarshkumarsinghcg-cmyk/CINNAMON_KITCHEN-CLONE",
      category: "Webpages",
      icon: <FaStore />,
      image: CinnamonKitchen
    },
    {
      id: 8,
      title: "Magicbricks-clone",
      description: "A responsive static Magicbricks clone focusing on layout, design, and UI structure.",
      tags: ["HTML", "CSS"],
      link: "https://magickbrick-clone.netlify.app/",
      videoLink: "https://youtu.be/S58FhaNs9Xg?si=GyXdt6W1lj7AoSae",
      github: "https://github.com/utkarshkumarsinghcg-cmyk/MAGIC_BRICK_CLONE",
      category: "Webpages",
      icon: <FaBuilding />,
      image: MagicBrick
    },
    {
      id: 7,
      title: "Study-Clock",
      description: "This is a study clock that helps you to study for a certain amount of time and take breaks in between. Includes timer and to-do list.",
      tags: ["React"],
      link: "https://clock-timer-project.vercel.app/",
      videoLink: "https://youtu.be/S58FhaNs9Xg?si=GyXdt6W1lj7AoSae",
      github: "https://github.com/utkarshkumarsingh",
      category: "Webpages",
      icon: <FaClock />,
      image: Clock
    },
    {
      id: 9,
      title: "Tic-Tac-Toe App",
      description: "A fully functional interactive Tic-Tac-Toe game built with modern web technologies and logic.",
      tags: ["React", "JavaScript"],
      link: "#",
      github: "https://github.com/utkarshkumarsingh",
      category: "Game",
      icon: <FaGamepad />
    },
    {
      id: 10,
      title: "E-Commerce Dashboard",
      description: "A massive full-stack inventory management system actively in development with live data tracking.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "https://github.com/utkarshkumarsingh",
      category: "Ongoing",
      icon: <FaChartBar />
    }
];

export const certificateList = [
    {
      id: 1,
      title: "AI - WebForge",
      organization: "Amity School of Engineering & Technology, Noida",
      description: "Participated in a fast-paced challenge to design and develop a stunning portfolio website within 36 hours, showcasing technical expertise and creative design.",
      date: "April 2026",
      badge: "Participant",
      link: cert1,
      icon: <FaTrophy />,
      image: certImg1
    },
    {
      id: 2,
      title: "Code Clash",
      organization: "IIT Hyderabad (Elan & nVision)",
      description: "Participated in a premier competitive programming competition, solving complex algorithmic and logical problems under strict time constraints.",
      date: "January 2026",
      badge: "Participant",
      link: cert2,
      icon: <FaMedal />,
      image: certImg2
    }
];
