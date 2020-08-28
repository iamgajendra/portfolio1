import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Gajendra Singh | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Gajendra.',
  subtitle: 'And, I create web and mobile applications.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Full-Stack Developer mainly focused on Web and Moblie Application development.',
  paragraphTwo:
    'I am passionate about building scalable software with best UI experience. I have worked on latest technologies and frameworks like React.js, React Native, Node.js and many more.. I also have some experience in various CMS platforms like Shopify, Wordpress, etc.',
  paragraphThree: 'Feel free to contact me at any time.',
  resume: 'https://drive.google.com/file/d/1gruFBcSog7rJz_KyjZFqkG0yXbCVMzTv/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'face-detection.png',
    title: 'Face Detection App',
    info:
      'A full-stack web application created using PERN stack, this app allows user to detect the faces in any image provided by user.This was achieved using Clarifai AI API.',
    info2: 'This application was created using React, Node, Express.js and postgres database.',
    url: 'https://face-detection-react-app1.herokuapp.com/',
    repo: 'https://github.com/iamgajendra/facedetection-react-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'whatsapp.png',
    title: 'Whatsapp Clone',
    info:
      'A full-stack web application created using React and firebase, this app allows users to create chat rooms and connect with others.',
    info2: 'This app also allows users to login via Google.',
    url: 'https://whatsapp-clone-aef87.web.app/',
    repo: 'https://github.com/iamgajendra/whatsapp-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'instagram.png',
    title: 'Instagram Clone',
    info:
      'A simple and minimalistic clone of Instagram, this full-stack application allows you to create posts, comment on other posts, and do the basic CRUD operations.',
    info2:
      'This application is created using React.js, Material-UI and firebase for database and authentication.',
    url: 'https://instagram-clone-d2749.web.app/',
    repo: 'https://github.com/iamgajendra/instagram-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robots.png',
    title: 'RoboFriends',
    info:
      'This is a fun project created using React.js and Robo API to display cool Robots in a grid.',
    info2: 'This app is full responsive. User can also search for their favorite robots.',
    url: 'https://lucid-almeida-505035.netlify.app/',
    repo: 'https://github.com/iamgajendra/robofriend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'corona.jpg',
    title: 'Case Study on Covid-19 with Self Organizing Maps.',
    info:
      'Developed a clustering model and map the given countries on the basis of similarity in the situations of Covid-19.',
    info2:
      'Compared the feature plane for all the features and also, identified the most relevant feature plane using visualization.',
    url: 'https://drive.google.com/file/d/1x_kihxUqnQ96hQHukIeAVFG48oie3ktd/view?usp=sharing',
    repo: 'https://github.com/iamgajendra/Covid-19-Self-Organizing-Maps', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'businessgajendra@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/iamgajendras/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/iamgajendra',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '#', // your codepen url
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
