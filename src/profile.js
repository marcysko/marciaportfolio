// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Marcia",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "My name is Marcia Skousen and I recently graduated from the University of Arizona Coding Boot Camp with a certificate in Full Stack Web Development. My background has prepared me well for the attention to detail and problem solving required to be a great developer. I consider myself a 'forever student' and I am continually striving to stay in sync with the latest in technology. I am passionate about travel, learning foreign languages, gastronomy, reading and music.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "Bootstrap",
    faClass: "fab fa-bootstrap",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    faClass: "fab fa-python",
  },
  {
    name: "React",
    faClass: "fab fa-react",
  },
  
  {
    name: "Database",
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    faClass: "fab fa-aws",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Spy Solutions",
    skills: ["MERN"],
    url: "https://morning-tundra-00231.herokuapp.com/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "AZ 4 Locals",
    skills: ["Handlebars, CSS, JS"],
    url: "https://agile-cliffs-08028.herokuapp.com/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Food Festival",
    skills: ["HTML, CSS, JS"],
    url: "https://marcysko.github.io/food-festival/",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Weather Dashboard",
    skills: ["HTML, CSS, JS"],
    url: "https://marcysko.github.io/WK06WeatherDashboard/",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Tattoo Ideas",
    skills: ["HTML, CSS, JS"],
    url: "https://nmoss3.github.io/tattooGenerator/",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Note Taker",
    skills: ["HTML, CSS, JS"],
    url: "https://desolate-ridge-51716.herokuapp.com/",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Coding Boot Camp Certificate",
    url: "https://i.postimg.cc/CMXCNMNF/Marcia-Skousen-01.png",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Spy Solutions Website Demo",
    url: "https://youtu.be/GFRrquMPY98",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Adobe Photoshop and Premiere Pro Fun Project",
    url: "https://youtu.be/CY_bM0Zu6BA",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "After viewing my portfolio or resume you may have some questions for me. I know I am not your typical web development boot camp graduate.  If you're looking for an experienced professional with the programming and life skills to tackle complex challenges, let's talk.",
  copyright: "",
  contactUrl: "https://formspree.io/f/mnqlgvdy",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/marcysko",
  linkedin: "https://www.linkedin.com/in/marcia-skousen/",
  instagram: "https://instagram.com/marcia_l_skousen",
  resume: "https://docs.google.com/document/d/18zZ1pFuwUCThGCUzuikNlsXMjeBBcwpIhkJArd2R6Lc/edit?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
