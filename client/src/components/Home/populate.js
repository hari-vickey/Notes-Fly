const list = [
  { task: 'Practice React', checked: true },
  { task: 'Learn MERN' },
  { task: 'practice MERN Stack' },
  { task: 'Build a Mini Project', checked: true },
  { task: 'Revise MERN' },
  { task: 'Learn web3' }
];

const notes = [
  // {
  //   title: 'Notes Fly',
  //   content: 'A simple and elegant notes taking app to keep track of important points to remember on the fly'
  // },
  {
    title: 'React',
    content: 'React is a javascript library for the web and native user interface out of individual pieces called components'
  },
  {
    title: 'mongoDB',
    content: 'MongoDB is a NoSQL database and uses JSON-like documents with optional schemas to store user data.'
  },
  {
    title: 'Express',
    content: 'Express.js is a back-end web application framework for building RESTful APIs with Node.js'
  },
  {
    title: 'Node.js',
    content: 'Node.js allows us to run JavaScript on the server. It is helpful to create server-side applications since it uses an asynchronous event-driven model.'
  },
  {
    title: 'OAuth',
    content: 'OAuth is one of the methods to authenticate to the website using Google, GitHub, etc., ensuring the best possible security.'
  }
]

const Populate = {list, notes};

export default Populate;