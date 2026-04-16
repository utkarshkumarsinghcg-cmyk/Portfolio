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
import newCertImg from './assets/Screenshot 2026-04-16 170032.png';
import cert3 from './assets/FrontendOdecy.pdf';
import ClickCounter from './assets/ClickCounter.png';
import FlipCard from './assets/FlipCard.png';
import TicTacToe from './assets/TickTacToe.png';
import TypingTestImg from './assets/TypingSpeedTest.png';

export const projectList = [
    {
      id: 4,
      title: "Forme-Clone",
      description: "A modern hardware solutions website showcasing tools, components, and technology essentials.",
      tags: ["HTML", "CSS"],
      link: "https://frome.netlify.app/",
      videoLink: "https://youtu.be/YicDrCGcrw4?si=WJygjlAix0Ow9vtq",
      github: "https://github.com/utkarshkumarsinghcg-cmyk/FORME_CLONE",
      category: "Clones",
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
      category: "Clones",
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
      category: "Clones",
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
      category: "Frontend",
      icon: <FaClock />,
      image: Clock
    },
    {
      id: 9,
      title: "Tic-Tac-Toe App",
      description: "A fully functional interactive Tic-Tac-Toe game built with modern web technologies and logic.",
      tags: ["React", "JavaScript"],
      link: "https://tic-tac-toe-kohl-eight-70.vercel.app/",
      videoLink: "#", // User needs to add
      github: "https://github.com/utkarshkumarsingh",
      category: "Games",
      icon: <FaGamepad />,
      image: TicTacToe
    },
    {
      id: 11,
      title: "Click Counter Game",
      description: "An interactive game designed to test your clicking speed and reflexes with real-time feedback.",
      tags: ["React", "JavaScript", "Tailwind"],
      link: "https://click-counter-blue.vercel.app/",
      videoLink: "#", // User needs to add
      github: "https://github.com/utkarshkumarsingh",
      category: "Games",
      icon: <FaGamepad />,
      image: ClickCounter
    },
    {
      id: 12,
      title: "Flip Card Game",
      description: "A memory-based card matching game built with React, focusing on state management and interactive UI.",
      tags: ["React", "JavaScript", "CSS"],
      link: "https://flip-card-react-sandy.vercel.app/",
      videoLink: "#", // User needs to add
      github: "https://github.com/utkarshkumarsingh",
      category: "Games",
      icon: <FaGamepad />,
      image: FlipCard
    },
    {
      id: 13,
      title: "Typing Speed Test",
      description: "A professional typing test application to measure WPM and accuracy with real-time statistics.",
      tags: ["React", "JavaScript", "Vite"],
      link: "https://typing-speed-test-delta-seven.vercel.app/",
      videoLink: "#", // User needs to add
      github: "https://github.com/utkarshkumarsingh",
      category: "Games",
      icon: <FaGamepad />,
      image: TypingTestImg
    },
    {
      id: 10,
      title: "E-Commerce Dashboard",
      description: "A massive full-stack inventory management system actively in development with live data tracking.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      videoLink: "#", // User needs to add
      postmanLink: "#", // Mandatory for Full Stack
      github: "https://github.com/utkarshkumarsingh",
      category: "Full Stack",
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
    },
    {
      id: 3,
      title: "Frontend Odyssey",
      organization: "Hackathon",
      description: "Successfully built and presented an interactive project showcasing rich animations and UI/UX.",
      date: "October 2023",
      badge: "Participant",
      link: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/fad434fd-844c-4f8f-8fbe-60167a47373d.pdf",
      icon: <FaLaptop />,
      image: newCertImg
    }
];

export const hackathonList = [
    {
      id: 1,
      hackathonName: "Frontend Odyssey Hackathon",
      date: "January 2026",
      projectTitle: "Frontend Odyssey",
      problemStatement: "Create an interactive and immersive frontend web experience focusing on animations, UI/UX, and performance.",
      description: "A fully frontend interactive project developed for the Frontend Odyssey Hackathon. Built with React, featuring rich animations and an immersive UI/UX.",
      tags: ["React", "Animations", "Frontend"],
      link: "https://frontend-odyssey-8c6v.vercel.app/",
      videoLink: "https://youtu.be/hfGGrY0ZCOI?si=wvgJLxupQeqVSbG9",
      github: "https://github.com/utkarshkumarsinghcg-cmyk/Frontend-Odyssey",
      icon: <FaLaptop />,
      image: frontendOdeacy
    }
];

export const achievementList = [
  {
    id: 1,
    title: "36-Hour Hackathon Participant",
    description: "Designed and developed a fully responsive React portfolio within a 36-hour time limit at Amity AI-WebForge.",
    date: "April 2026",
    icon: <FaTrophy />,
    badge: "Finalist"
  },
  {
    id: 2,
    title: "Competitive Programming Milestone",
    description: "Successfully solved complex algorithmic challenges at IIT Hyderabad's Code Clash, demonstrating strong logic and problem-solving skills.",
    date: "January 2026",
    icon: <FaMedal />,
    badge: "Participant"
  }
];

export const figmaList = [
  {
    id: 1,
    title: "Modern Portfolio UI",
    description: "A sleek, dark-themed UI/UX design featuring glassmorphism and interactive components for a professional developer portfolio.",
    image: frontendOdeacy, // Placeholder
    link: "https://www.figma.com/", // Add actual figma link
    tags: ["Figma", "UI/UX", "Design System"]
  }
];
