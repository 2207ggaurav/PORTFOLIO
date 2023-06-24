import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  // FaCode,
} from 'react-icons/fa';
// import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
import { FiFileText} from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Gaurav',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Gupta',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '23 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Gorakhpur',
  },

  {
    id: 7,
    title: 'Mobile No. : ',
    description: '7891478561',
  },

  {
    id: 8,
    title: 'Email : ',
    description: '227ggupta@gmail.com',
  },

  {
    id: 9,
    title: 'Degree : ',
    description: 'B.Tech(ECE)',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'English',
  },
];

export const stats = [
  {
    id: 1,
    no: '0',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: 'NA',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '24/7',
    title: ' Online <br /> Support',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 - PRESENT',
    title: 'xyz <span> *** </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 - PRESENT',
    title: 'xyz <span> *** </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaGraduationCap />,
    year: '2020 - PRESENT',
    title: 'xyz <span> *** </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020 - 2024',
    title: 'B.Tech <span> Madan Mohan Malaviya University of Technology </span>',
    desc: 'I am currently pursuing my B.Tech in Electronics & Communication Engineering from Madan Mohan Malaviya University of Technology, Gorakhpur. I am currently in my final year.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'Intermediate <span> Bansal Public School </span>',
    desc: 'I have completed my intermediate from Bansal Public School which is affiliated to C.B.S.E with an aggregate percentage of 81 in year 2019.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'High School <span> R.P.M Academy </span>',
    desc: 'I have completed my high school from R.P.M Academy which is affiliated to C.B.S.E with a cummulative grade point average of 10 in year 2017.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '88',
  },

  {
    id: 2,
    title: 'CSS',
    percentage: '90',
  },

  {
    id: 3,
    title: 'JavaScript',
    percentage: '75',
  },

  {
    id: 4,
    title: 'React.JS',
    percentage: '70',
  },

  {
    id: 5,
    title: 'Node.JS',
    percentage: '75',
  },

  {
    id: 6,
    title: 'Express.JS',
    percentage: '70',
  },

  {
    id: 7,
    title: 'MongoDB',
    percentage: '70',
  },

  {
    id: 8,
    title: 'BootStrap',
    percentage: '60',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Login Form',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Frontend Project',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      // {
      //   icon: <FaCode />,
      //   title: 'Language : ',
      //   desc: 'Adobe Photoshop',
      // },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Random Quotes',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Frontend Project',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      // {
      //   icon: <FaCode />,
      //   title: 'Language : ',
      //   desc: 'React JS',
      // },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'E-commerce Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Frontend Project',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      // {
      //   icon: <FaCode />,
      //   title: 'Language : ',
      //   desc: 'Adobe Premium',
      // },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      // {
      //   icon: <FaCode />,
      //   title: 'Language : ',
      //   desc: 'Adobe Premium',
      // },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
       {
         title: 'Project : ',
        desc: 'Website',
       },
      // {
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      // {
      //   title: 'Language : ',
      //   desc: 'React JS, Node JS',
      // },
      // {
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      // {
      //   icon: <FaCode />,
      //   title: 'Language : ',
      //   desc: 'Adobe Photoshop',
      // },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dibble.com',
      // },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
