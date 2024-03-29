import {
  ChatGPT,
  Python,
  SQL,
  MSOffice,
  RPA,
  ui,
  data,
  marketing,
  tech,
  media,
  itdesk,
  itsector,
  placements,
  technology,
  residential,
  training,
  welcome
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "jobs",
    title: "Job Profiles",
  },
  {
    id: "courses",
    title: "Common Courses",
  },
];

const services = [
  {
    service:
      "Free of Cost",
    description: "Government funded training program for IT sector",
  },
  {
    service:
      "Guaranteed Placement",
    description: "Dedicate students will be placed as we are tied up with Industry",
  },
  {
    service:
      "Residential Training",
    description: "3 months training program (Lodging and Meals will be provided)",
  },
  {
    service:
      "Teaching latest technologies",
    description: "We train in latest high-in-demand technologies including AI and prompt engineering",
  },
  {
    service:
      "Making it easier to enter IT sector",
    description: "We train as per the industry standards, making it easier to enter IT sector",
  },
];

const projects = [
  {
    name: "CHATGPT - PROMPT ENGINEERING",
    description: [
      "Prompt engineering involves crafting prompts or input queries in a way that get more accurate and relevant responses from chat GPT-type models.",
      "It often involves experimenting with different phrasings, structures, and context to guide the model towards the desired output.",
      "This can include providing additional context, using specific keywords, or structuring the prompt to resemble a particular type of conversation or task.",
      "Prompt engineering is crucial for maximising the capabilities of large language models."
    ],
    icon: ChatGPT,
  },
  {
    name: "PYTHON",
    description:
       [
        "Python is a high-level, interpreted programming language known for its simplicity and readability",
        "It is widely used for web development, data analysis, artificial intelligence, scientific computing, and automation."
       ],
    icon: Python,
  },
  {
    name: "SQL",
    description:
      [
        "SQL (Structured Query Language) is a programming language used for managing and manipulating relational databases.",
        "It is used for tasks such as querying data, inserting, updating, and deleting records, creating and modifying database schemas, and controlling access to the database.",
        "SQL is essential for working with relational database management systems (RDBMS) and is used in data retrieval, manipulation, administration, analysis, and modelling."
      ],
    icon: SQL,
  },
  {
    name: "MS OFFICE",
    description:
      [
        "Microsoft Word is a word processing program used for creating documents such as letters, reports, and resumes. It offers features for formatting text, inserting images and tables, and spell-checking.",
        "Microsoft PowerPoint is a presentation program used for creating slideshows for presentations. It allows users to add text, images, videos, and animations to slides, and offers features for designing slide layouts and transitions.",
        "Microsoft Excel is a spreadsheet program used for organising, analysing, and visualising data. It offers features for creating formulas, charts, and graphs, and for performing calculations and data analysis."
      ],
    icon: MSOffice,
  },
  {
    name: "ROBOTICS PROCESSING AUTOMATION",
    description:
      [
        "Robotic Process Automation (RPA) is the use of software robots or 'bots' to automate repetitive and rule-based tasks that are typically performed by humans.",
        "RPA can be used across industries to automate tasks such as data entry, report generation, customer service, finance and accounting, HR and recruitment, and supply chain management.",
        "RPA helps organisations improve efficiency, reduce errors, and free up human employees to focus on more complex tasks."
      ],
    icon: RPA,
  },
];

const jobs = [
  {
    role: "UI/UX Design",
    src: ui,
    description: "UI/UX Designers are experts who design user-friendly interfaces for digital products like websites and apps by understanding user needs, creating visually appealing designs, and ensuring smooth user experiences.",
    about: [
      "Conduct user research to understand user needs and preferences.",
      "Create wireframes, mockups, and prototypes to visualize design concepts.",
      "Design intuitive user interfaces that enhance usability and user experience.",
      "Stay updated with design trends and best practices."
    ],
    salary: [
      "Entry-level UI/UX designers can earn anywhere from ₹3,00,000 to ₹6,00,000 per year.",
      "Mid-level designers with a few years of experience can earn between ₹6,00,000 to ₹12,00,000 per year.",
      "Senior UI/UX designers or design leads can earn upwards of ₹12,00,000 per year, with some earning significantly more in larger companies or specialized roles."
    ],
    future: {
      description: "The future prospects for UI/UX designers are excellent due to:",
      reasons: [
        "The increasing importance of user experience.",
        "The expanding digital landscape.",
        "Emerging technologies.",
        "Remote work trends and clear career advancement opportunities."
      ]
    },
    companies: {
      description: "These companies are known for their focus on user experience and often hire UI/UX designers to create compelling and user-friendly interfaces for their products and services.",
      indian: [
        "Tata Consultancy Services (TCS)",
        "Infosys",
        "Wipro",
        "HCL Technologies",
        "Tech Mahindra",
        "Flipkart",
        "Ola",
        "Paytm",
        "Zomato",
        "Swiggy"
      ],
      global: [
        "Google",
        "Apple",
        "Microsoft",
        "Amazon",
        "Facebook",
        "Adobe",
        "IBM",
        "Airbnb",
        "Uber",
        "Netflix"
      ]
    }
  },
  {
    role: "Data Analyst",
    src: data,
    description: "A data analyst is a professional who collects, processes, and analyses data to help organisations make informed decisions.",
    about: [
      "Collecting and interpreting data.",
      "Identifying trends and patterns in complex data sets.",
      "Creating visualisations and reports to communicate findings.",
      "Collaborating with teams to understand data needs and requirements.",
      "Using statistical tools and techniques to analyze data.",
      "Recommending data-driven strategies to improve business outcomes."
    ],
    salary: [
      "Entry-level data analysts can earn anywhere from ₹3,00,000 to ₹6,00,000 per year.",
      "Mid-level analysts with a few years of experience can earn between ₹6,00,000 to ₹12,00,000 per year.",
      "Senior data analysts or data leads can earn upwards of ₹12,00,000 per year, with some earning significantly more in larger companies or specialised roles."
    ],
    future: {
      description: "The future prospects for data analysts are very promising due to increasing data availability, the growing importance of data-driven decisions, advancements in technology, cross-industry demand, and clear career advancement opportunities.",
      reasons: [
      ]
    },
    companies: {
      description: "These companies often have dedicated teams for data analysis and are known for their data-driven decision-making processes.",
      indian: [
        "Tata Consultancy Services (TCS)",
        "Infosys",
        "Wipro",
        "HCL Technologies",
        "Tech Mahindra",
        "Flipkart",
        "Ola",
        "Paytm",
        "Zomato",
        "Swiggy"
      ],
      global: [
        "Google",
        "Apple",
        "Microsoft",
        "Amazon",
        "Facebook",
        "Adobe",
        "IBM",
        "Airbnb",
        "Uber",
        "Netflix"
      ]
    }
  },
  {
    role: "Marketing Operation Analyst",
    src: marketing,
    description: "Marketing Operations Analysts are professionals who work within the marketing department of a company to help optimise and streamline marketing processes and strategies.",
    about: [
      "Analysing marketing data to identify trends, patterns, and insights.",
      "Developing and maintaining marketing performance dashboards and reports to track key performance indicators (KPIs) and ROI.",
      "Identifying inefficiencies in marketing processes and developing solutions to improve workflow and productivity.",
      "Conducting market research and competitive analysis to inform marketing strategies and tactics."
    ],
    salary: [
      "Entry-level Marketing Operations Analysts in India can expect to earn around ₹3,00,000 to ₹6,00,000 per year.",
      "Mid-level Marketing Operations Analysts with 3-5 years of experience can earn between ₹6,00,000 to ₹12,00,000 per year.",
      "Senior Marketing Operations Analysts with 5+ years of experience can earn upwards of ₹12,00,000 per year."
    ],
    future: {
      description: "The future prospects for Marketing Operations Analysts are promising, driven by the increasing reliance on data-driven decisionmaking in marketing and the growing demand for professionals who can optimize marketing processes and strategies.",
      reasons: [
      ]
    },
    companies: {
      description: "These companies often have dedicated teams and are known for their data driven decision-making processes.",
      indian: [
        "Tata Consultancy Services (TCS)",
        "Infosys",
        "Wipro",
        "Reliance Industries",
        "Flipkart",
        "Amazon India",
        "Hindustan Unilever Limited (HUL)",
        "ICICI Bank",
        "HDFC Bank",
        "Bharti Airtel"
      ],
      global: [
        "Google",
        "Apple",
        "Microsoft",
        "Amazon",
        "Facebook",
        "Adobe",
        "IBM",
        "Accenture",
        "Deloitte",
        "PwC",
        "McKinsey & Company"
      ]
    }
  },
  {
    role: "Media Developer",
    src: media,
    description: "A Media Developer is a professional responsible for creating and producing various types of media content, such as videos, animations, graphics, and interactive presentations. They typically work in industries such as advertising, marketing, entertainment.",
    about: [
      "Content Creation",
      "Scriptwriting",
      "Graphic Design",
      "Video Editing",
      "Animation",
      "Interactive Design"
    ],
    salary: [
      "Entry-level Media Developers with up to 2 years of experience can expect to earn between ₹2,00,000 to ₹5,00,000 per year.",
      "Mid-level Media Developers with 2-5 years of experience can earn between ₹5,00,000 to ₹10,00,000 per year.",
      "Senior Media Developers with 5+ years of experience can earn upwards of ₹10,00,000 per year."
    ],
    future: {
      description: "The future prospects for Media Developers are promising, with increasing demand for multimedia content across industries such as advertising, marketing, entertainment, education, and corporate communications.",
      reasons: [
      ]
    },
    companies: {
      description: "",
      indian: [
        "Tata Consultancy Services (TCS)",
        "Infosys",
        "Wipro",
        "HCL Technologies",
        "Tech Mahindra",
        "Flipkart",
        "Ola",
        "Paytm",
        "Zomato",
        "Swiggy"
      ],
      global: [
        "Google",
        "Apple",
        "Microsoft",
        "Amazon",
        "Facebook",
        "Adobe",
        "IBM",
        "Airbnb",
        "Uber",
        "Netflix"
      ]
    }
  },
  {
    role: "Tech Support Expert",
    src: tech,
    description: "A Tech Support Expert is a professional responsible for providing technical assistance and support to customers and clients regarding issues with products or services.",
    about: [
      "Providing technical support and assistance to customers.",
      "Identifying and diagnosing technical issues reported by customers.",
      "Troubleshooting technical problems and providing solutions.",
      "Documenting customer interactions, technical issues, and solutions in a clear and concise manner for future reference.",
      "Escalating complex technical issues to higher-level support teams or developers for further investigation and resolution."
    ],
    salary: [
      "Entry-level Technical Support Expert with up to 2 years of experience can expect to earn between ₹2,00,000 to ₹4,00,000 per year.",
      "Mid-level Technical Support Expert with 2-5 years of experience can earn between ₹4,00,000 to ₹8,00,000 per year.",
      "Senior Technical Support Expert with 5+ years of experience can earn upwards of ₹8,00,000 per year."
    ],
    future: {
      description: "The future prospects for Tech Support Expert are promising due to the increasing demand for technical expertise across industries. As businesses continue to adopt new technologies, Technical Support Engineers who stay updated with the latest trends and specialise in high-demand areas will have excellent career growth opportunities.",
      reasons: [
      ]
    },
    companies: {
      description: "These companies are known for their focus on user experience and often hire UI/UX designers to create compelling and user-friendly interfaces for their products and services.",
      indian: [
        "Tata Consultancy Services (TCS)",
        "Infosys",
        "Wipro",
        "Reliance Industries",
        "Flipkart",
        "Amazon India",
        "Hindustan Unilever Limited (HUL)",
        "ICICI Bank",
        "HDFC Bank",
        "Bharti Airtel"
      ],
      global: [
        "Google",
        "Apple",
        "Microsoft",
        "Amazon",
        "Facebook",
        "IBM",
        "Accenture",
        "Deloitte",
        "PwC",
        "McKinsey & Company"
      ]
    }
  },
  {
    role: "IT Desk Attendant",
    src: itdesk,
    description: "An IT Help Desk is a centralised resource that provides technical assistance and support to users experiencing IT issues. They troubleshoot problems, manage support tickets, provide user training, maintain IT systems.",
    about: [
      "Providing technical assistance and troubleshooting for hardware, software, and network issues.",
      "Providing basic training and guidance to users on how to use IT systems and software effectively and troubleshoot common issues.",
      "Help in creating a knowledge base for self-help and training purposes.",
      "Performing routine maintenance tasks, such as software updates.",
      "Assisting with security-related issues, such as malware detection."
    ],
    salary: [
      "Entry-level Technical Support Engineers with up to 2 years of experience can expect to earn between ₹2,00,000 to ₹4,00,000 per year.",
      "Mid-level Technical Support Engineers with 2-5 years of experience can earn between ₹4,00,000 to ₹8,00,000 per year.",
      "Senior Technical Support Engineers with 5+ years of experience can earn upwards of ₹8,00,000 per year."
    ],
    future: {
      description: "The future prospects for IT Help Desk professionals are promising due to the increasing complexity of IT systems and the growing demand for remote support services. Automation and AI technologies are expected to streamline routine tasks, while specialisation in areas such as cybersecurity and cloud computing will offer opportunities for career growth. Continuous learning will be essential to stay relevant in this rapidly evolving field.",
      reasons: [
      ]
    },
    companies: {
      description: "",
      indian: [
        "Tata Consultancy Services (TCS)",
        "Infosys",
        "Wipro",
        "Reliance Industries",
        "Flipkart",
        "Amazon India",
        "Hindustan Unilever Limited (HUL)",
        "ICICI Bank",
        "HDFC Bank",
        "Bharti Airtel"
      ],
      global: [
        "Google",
        "Apple",
        "Microsoft",
        "Amazon",
        "Facebook",
        "IBM",
        "Accenture",
        "Deloitte",
        "PwC",
        "McKinsey & Company"
      ]
    }
  }
];

const heros = [
  {
    title: "Welcome to IndusX!",
    subtitle: "We are a Social Enterprise skilling the disadvantaged unemployed youths of Jharkhand, Odisha, West Bengal, Haryana, and Bihar for the past 12 years.",
    image: welcome,
  },
  {
    title: "GET FREE OF COST TRAINING",
    subtitle: "Government funded training program for IT sector.",
    image: training,
  },
  {
    title: "GET GUARANTEED PLACEMENT OPPORTUNITIES",
    subtitle: "Dedicated students will be placed as we are tied up with Industry.",
    image: placements,
  },
  {
    title: "GET RESIDENTIAL TRAINING",
    subtitle: "3 months training program (Lodging and Meals will be provided).",
    image: residential,
  },
  {
    title: "LEARN LATEST TECHNOLOGIES",
    subtitle: "We train in latest high-in-demand technologies including AI and prompt engineering.",
    image: technology,
  },
  {
    title: "EASILY ENTER IT SECTOR",
    subtitle: "We train as per the industry standards, making it easier to enter IT sector.",
    image: itsector
  },
];

export { services, projects, jobs, heros };
