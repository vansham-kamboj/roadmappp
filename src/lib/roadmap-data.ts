
import type { IconName } from '@/lib/icons';

export interface RoadmapStep {
  title: string;
  description: string;
}

export interface Field {
  id: string;
  name: string;
  icon: IconName;
  description: string;
  details: string;
  relatedFields: string[];
  roadmap: RoadmapStep[];
}

export const ROADMAP_DATA: Field[] = [
    {
      id: 'frontend-development',
      name: 'Frontend Development',
      icon: 'code',
      description: 'Create the visual parts of websites and apps that users interact with directly.',
      details: 'Frontend developers are responsible for the user-facing part of a website. They use HTML, CSS, and JavaScript to create the look, feel, and interactivity of a web application. It\'s a creative field that blends design with programming.',
      relatedFields: ['ui-ux-design', 'backend-development'],
      roadmap: [
        { title: 'Learn HTML/CSS', description: 'Master HTML/CSS fundamentals.' },
        { title: 'Learn JavaScript', description: 'Learn JavaScript basics and DOM manipulation.' },
        { title: 'Pick a framework', description: 'Pick one framework (React recommended).' },
        { title: 'Build projects', description: 'Build 5-10 projects for portfolio.' },
        { title: 'Learn version control', description: 'Learn version control (Git) and deployment.' },
      ],
    },
    {
      id: 'backend-development',
      name: 'Backend Development',
      icon: 'server',
      description: 'Build server-side logic, databases, and APIs that power applications.',
      details: 'Backend developers work on the server-side of applications. They manage databases, build APIs, and write the logic that powers the frontend. It\'s a crucial role for any dynamic web application, focusing on scalability, security, and performance.',
      relatedFields: ['frontend-development', 'devops-engineering'],
      roadmap: [
        { title: 'Learn a backend language', description: 'Learn a backend language (Python/Node.js recommended).' },
        { title: 'Master database concepts', description: 'Master database concepts (SQL first).' },
        { title: 'Understand RESTful APIs', description: 'Understand RESTful APIs and HTTP.' },
        { title: 'Learn authentication', description: 'Learn authentication and security basics.' },
        { title: 'Build full CRUD applications', description: 'Build full CRUD applications (3-4 projects).' },
      ],
    },
    {
        id: 'full-stack-development',
        name: 'Full-Stack Development',
        icon: 'code',
        description: 'Handle both frontend and backend development, building complete applications.',
        details: 'Full-stack developers handle both frontend and backend development. They are proficient in various technologies, enabling them to build complete web applications from start to finish. Popular stacks include MERN, MEAN, and Django with React.',
        relatedFields: ['frontend-development', 'backend-development'],
        roadmap: [
            { title: 'Start with frontend basics', description: 'Begin by mastering HTML, CSS, and JavaScript.' },
            { title: 'Learn backend fundamentals', description: 'Choose a backend language and learn about servers and databases.' },
            { title: 'Master one full stack', description: 'Specialize in a stack like MERN (MongoDB, Express, React, Node).' },
            { title: 'Build complete applications', description: 'Develop 3-5 full-stack projects for your portfolio.' },
            { title: 'Learn deployment and DevOps basics', description: 'Understand how to deploy and maintain your applications.' },
        ],
    },
    {
      id: 'mobile-app-development',
      name: 'Mobile App Development',
      icon: 'mobile',
      description: 'Create applications for iOS and Android platforms.',
      details: 'Mobile app developers create applications for mobile devices like smartphones and tablets. You can specialize in native development (Swift for iOS, Kotlin for Android) or cross-platform development (React Native, Flutter) to build apps for multiple platforms from a single codebase.',
      relatedFields: ['ui-ux-design', 'backend-development'],
      roadmap: [
        { title: 'Choose a path', description: 'Decide between native (iOS/Android) or cross-platform (Flutter/React Native).' },
        { title: 'Learn the language', description: 'Master Dart for Flutter, or Swift/Kotlin for native development.' },
        { title: 'Build user interfaces', description: 'Learn to create responsive and attractive mobile UIs.' },
        { title: 'Handle data and networking', description: 'Learn to fetch data from APIs and store it locally.' },
        { title: 'Deploy to app stores', description: 'Understand the process of publishing on the Apple App Store and Google Play Store.' },
      ],
    },
    {
        id: 'game-development',
        name: 'Game Development',
        icon: 'game',
        description: 'Create video games for various platforms (PC, console, mobile).',
        details: 'Game developers design, program, and produce video games for computers, consoles, and mobile devices. This field combines creativity with technical skill, involving everything from physics and AI to storytelling and art. Popular game engines like Unity and Unreal Engine are key tools.',
        relatedFields: ['ar-vr-development', 'computer-vision-engineer'],
        roadmap: [
            { title: 'Learn a game engine', description: 'Choose and master a game engine like Unity (with C#) or Unreal Engine (with C++).' },
            { title: 'Master programming', description: 'Become proficient in C# or C++ for game logic and mechanics.' },
            { title: 'Study game design', description: 'Learn about game mechanics, level design, and player experience.' },
            { title: 'Build small games', description: 'Create 3-5 small, complete games to build your portfolio.' },
            { title: 'Participate in game jams', description: 'Collaborate with others and create games under tight deadlines.' },
        ],
    },
    {
        id: 'api-development-integration',
        name: 'API Development & Integration',
        icon: 'server',
        description: 'Design and build APIs that allow different software systems to communicate.',
        details: 'API developers create the interfaces that allow different software applications to talk to each other. They design and build robust, scalable, and secure APIs, often following REST or GraphQL principles. This role is crucial for building microservices-based architectures.',
        relatedFields: ['backend-development', 'devops-engineering'],
        roadmap: [
            { title: 'Master REST principles', description: 'Learn the fundamentals of designing RESTful APIs.' },
            { title: 'Learn API authentication', description: 'Understand protocols like OAuth 2.0 and JWT for securing APIs.' },
            { title: 'Study API design best practices', description: 'Learn how to create APIs that are easy to use and maintain.' },
            { title: 'Build and document APIs', description: 'Create 3-5 APIs and document them using tools like Swagger.' },
            { title: 'Learn GraphQL', description: 'Explore GraphQL as an alternative to REST for more flexible data fetching.' },
        ],
    },
    {
      id: 'data-science',
      name: 'Data Science',
      icon: 'data',
      description: 'Extract insights from data using statistical analysis and machine learning.',
      details: 'Data scientists use a combination of statistics, machine learning, and domain expertise to extract valuable insights from data. They clean and analyze data, build predictive models, and communicate their findings to stakeholders to drive business decisions.',
      relatedFields: ['machine-learning-engineer', 'data-engineering'],
      roadmap: [
        { title: 'Learn Python', description: 'Master Python programming, the primary language for data science.' },
        { title: 'Master statistics and probability', description: 'Understand the mathematical foundations of data analysis.' },
        { title: 'Study machine learning algorithms', description: 'Learn about various ML algorithms and when to use them.' },
        { title: 'Learn data manipulation', description: 'Become proficient with tools like Pandas and SQL for data handling.' },
        { title: 'Complete data projects', description: 'Work on 5-10 projects with real datasets to build your portfolio.' },
      ],
    },
    {
      id: 'machine-learning-engineer',
      name: 'Machine Learning Engineer',
      icon: 'ml',
      description: 'Build and deploy machine learning models at scale.',
      details: 'Machine learning engineers are responsible for building and productionizing machine learning models. They work at the intersection of software engineering and data science, focusing on creating scalable, efficient, and reliable ML systems. MLOps is a key part of their role.',
      relatedFields: ['data-science', 'data-engineering'],
      roadmap: [
        { title: 'Build a strong foundation', description: 'Have a strong foundation in Python and mathematics.' },
        { title: 'Learn classical ML algorithms', description: 'Understand the theory and practice of traditional ML models.' },
        { title: 'Study deep learning', description: 'Dive into neural networks and deep learning frameworks.' },
        { title: 'Master ML frameworks', description: 'Become an expert in TensorFlow or PyTorch.' },
        { title: 'Learn MLOps and deployment', description: 'Understand how to deploy, monitor, and maintain ML models in production.' },
      ],
    },
    {
        id: 'business-intelligence-analyst',
        name: 'Business Intelligence Analyst',
        icon: 'data',
        description: 'Transform raw data into actionable business insights through reports and dashboards.',
        details: 'BI analysts help businesses make better decisions by analyzing data and creating insightful reports and dashboards. They use BI tools like Tableau and Power BI to visualize data and communicate trends and patterns to stakeholders across the organization.',
        relatedFields: ['data-science', 'data-engineering'],
        roadmap: [
            { title: 'Master SQL', description: 'Become proficient in SQL for querying and extracting data from databases.' },
            { title: 'Learn a BI tool', description: 'Master a business intelligence tool like Power BI or Tableau.' },
            { title: 'Understand business metrics', description: 'Learn about key performance indicators (KPIs) and business metrics.' },
            { title: 'Learn data modeling', description: 'Understand how to structure data for effective analysis and reporting.' },
            { title: 'Create dashboard projects', description: 'Build 5-10 comprehensive dashboards for your portfolio.' },
        ],
    },
    {
        id: 'data-engineering',
        name: 'Data Engineering',
        icon: 'data',
        description: 'Build and maintain the infrastructure for data generation, storage, and processing.',
        details: 'Data engineers design, build, and maintain the systems that handle large volumes of data. They create data pipelines (ETL/ELT), manage data warehouses and data lakes, and ensure that data is available and reliable for data scientists and analysts.',
        relatedFields: ['data-science', 'cloud-engineering'],
        roadmap: [
            { title: 'Learn SQL and databases', description: 'Gain a strong foundation in SQL and database fundamentals.' },
            { title: 'Master Python for data processing', description: 'Become proficient in Python for building data pipelines.' },
            { title: 'Study ETL concepts', description: 'Learn about Extract, Transform, Load (ETL) and relevant tools.' },
            { title: 'Learn Apache Spark', description: 'Master Spark for large-scale data processing.' },
            { title: 'Understand data warehousing', description: 'Learn the principles of data warehousing and data lakes.' },
        ],
    },
    {
      id: 'cloud-engineering',
      name: 'Cloud Engineering',
      icon: 'default',
      description: 'Design, deploy, and manage applications on cloud platforms.',
      details: 'Cloud engineers specialize in designing, building, and managing applications and infrastructure on cloud platforms like AWS, Azure, and Google Cloud. They work with a wide range of cloud services, including compute, storage, networking, and security, and often use Infrastructure as Code (IaC) to automate their work.',
      relatedFields: ['devops-engineering', 'backend-development'],
      roadmap: [
        { title: 'Choose a cloud platform', description: 'Select a platform to focus on, such as AWS, Azure, or GCP.' },
        { title: 'Get a foundational certification', description: 'Earn a certification like AWS Cloud Practitioner to validate your knowledge.' },
        { title: 'Learn core services', description: 'Master the core compute, storage, and networking services of your chosen platform.' },
        { title: 'Master Infrastructure as Code', description: 'Learn tools like Terraform to automate infrastructure provisioning.' },
        { title: 'Get an associate-level certification', description: 'Aim for a certification like AWS Solutions Architect - Associate.' },
      ],
    },
    {
      id: 'devops-engineering',
      name: 'DevOps Engineering',
      icon: 'devops',
      description: 'Bridge development and operations, automating deployment and infrastructure.',
      details: 'DevOps engineers work to streamline the software development lifecycle by automating processes and improving collaboration between development and operations teams. They manage CI/CD pipelines, use containerization tools like Docker and Kubernetes, and monitor system performance to ensure reliability.',
      relatedFields: ['cloud-engineering', 'backend-development'],
      roadmap: [
        { title: 'Learn Linux fundamentals', description: 'Become comfortable with the Linux command line and system administration.' },
        { title: 'Master Git and version control', description: 'Become an expert in Git for managing code and collaboration.' },
        { title: 'Learn scripting', description: 'Master a scripting language like Bash or Python for automation.' },
        { title: 'Study CI/CD concepts', description: 'Learn how to build and manage continuous integration and deployment pipelines.' },
        { title: 'Master Docker and Kubernetes', description: 'Become proficient in containerization and container orchestration.' },
      ],
    },
    {
        id: 'network-engineering',
        name: 'Network Engineering',
        icon: 'server',
        description: 'Design, implement, and manage computer networks.',
        details: 'Network engineers are responsible for designing, implementing, and maintaining the computer networks that organizations rely on. They work with hardware like routers and switches, configure network protocols, and ensure the network is secure, reliable, and performant.',
        relatedFields: ['cybersecurity-specialist', 'cloud-engineering'],
        roadmap: [
            { title: 'Learn networking fundamentals', description: 'Understand the basics of TCP/IP, DNS, and other network protocols.' },
            { title: 'Get CCNA certification', description: 'Earn the Cisco Certified Network Associate (CCNA) certification.' },
            { title: 'Practice with network simulators', description: 'Use tools like GNS3 or Cisco Packet Tracer to practice your skills.' },
            { title: 'Learn network security basics', description: 'Understand firewalls, VPNs, and other security concepts.' },
            { title: 'Gain hands-on experience', description: 'Get practical experience by setting up and managing real network equipment.' },
        ],
    },
    {
        id: 'database-administration',
        name: 'Database Administration',
        icon: 'database',
        description: 'Manage, secure, and optimize databases for organizations.',
        details: 'Database administrators (DBAs) are responsible for the performance, integrity, and security of an organization\'s databases. They handle tasks like database design, installation, configuration, backup and recovery, and performance tuning.',
        relatedFields: ['data-engineering', 'backend-development'],
        roadmap: [
            { title: 'Master SQL fundamentals', description: 'Become an expert in SQL for querying and managing databases.' },
            { title: 'Learn database design', description: 'Understand database design principles and normalization.' },
            { title: 'Study a major RDBMS', description: 'Deeply learn a relational database system like PostgreSQL or MySQL.' },
            { title: 'Learn backup and recovery', description: 'Master the techniques for backing up and recovering databases.' },
            { title: 'Understand performance tuning', description: 'Learn how to optimize database performance.' },
        ],
    },
    {
        id: 'system-administration',
        name: 'System Administration',
        icon: 'server',
        description: 'Maintain and manage an organization\'s IT infrastructure and servers.',
        details: 'System administrators are responsible for the day-to-day operation of an organization\'s IT systems. They manage servers, user accounts, and software, and ensure that the IT infrastructure is running smoothly and securely. This role often serves as an entry point into other IT specializations.',
        relatedFields: ['devops-engineering', 'network-engineering'],
        roadmap: [
            { title: 'Learn Linux fundamentals', description: 'Become proficient in Linux system administration.' },
            { title: 'Master Windows Server', description: 'Learn to manage and administer Windows Server environments.' },
            { title: 'Learn scripting', description: 'Master scripting with Bash or PowerShell for automation.' },
            { title: 'Understand networking basics', description: 'Gain a solid understanding of fundamental networking concepts.' },
            { title: 'Get certifications', description: 'Earn industry certifications like CompTIA A+ or RHCSA.' },
        ],
    },
    {
      id: 'cybersecurity-specialist',
      name: 'Cybersecurity Specialist',
      icon: 'devops',
      description: 'Protect organizations from cyber threats and security breaches.',
      details: 'Cybersecurity specialists protect an organization\'s computer systems and networks from cyberattacks. They monitor for security threats, investigate incidents, and implement security measures to prevent breaches. This is a fast-growing field with many areas of specialization.',
      relatedFields: ['penetration-testing', 'devops-engineering'],
      roadmap: [
        { title: 'Learn networking and OS', description: 'Build a strong foundation in networking and operating systems.' },
        { title: 'Study security principles', description: 'Learn about cryptography, access control, and other security concepts.' },
        { title: 'Learn Linux for security', description: 'Master the Linux command line and security tools.' },
        { title: 'Practice with security tools', description: 'Become proficient with tools like Wireshark, Nmap, and Metasploit.' },
        { title: 'Get certifications', description: 'Earn certifications like CompTIA Security+ or CEH.' },
      ],
    },
    {
        id: 'penetration-testing',
        name: 'Penetration Testing',
        icon: 'devops',
        description: 'Simulate cyberattacks to find security vulnerabilities before malicious hackers do.',
        details: 'Penetration testers, or ethical hackers, are hired to legally hack into systems to find vulnerabilities. They use the same tools and techniques as malicious attackers to identify weaknesses so they can be fixed before they are exploited. This is a highly hands-on and challenging field.',
        relatedFields: ['cybersecurity-specialist', 'backend-development'],
        roadmap: [
            { title: 'Master networking and Linux', description: 'Build a very strong foundation in networking and Linux.' },
            { title: 'Learn web application vulnerabilities', description: 'Study the OWASP Top 10 and other common web vulnerabilities.' },
            { title: 'Practice with Kali Linux', description: 'Become an expert in using the tools available in Kali Linux.' },
            { title: 'Get OSCP certification', description: 'Prepare for and earn the Offensive Security Certified Professional (OSCP) certification.' },
            { title: 'Participate in bug bounty programs', description: 'Find and report vulnerabilities in real-world systems.' },
        ],
    },
    {
        id: 'quality-assurance',
        name: 'Quality Assurance (QA)',
        icon: 'devops',
        description: 'Ensure software quality through manual and automated testing.',
        details: 'QA engineers are responsible for ensuring that software meets quality standards before it is released. They perform various types of testing, including manual and automated testing, to find and report bugs. This role is crucial for delivering a high-quality user experience.',
        relatedFields: ['frontend-development', 'backend-development'],
        roadmap: [
            { title: 'Learn software testing fundamentals', description: 'Understand the different types of testing and testing methodologies.' },
            { title: 'Practice manual testing', description: 'Get hands-on experience with manual testing techniques.' },
            { title: 'Learn a programming language', description: 'Master a language like Python or JavaScript for test automation.' },
            { title: 'Master test automation', description: 'Learn to use tools like Selenium or Cypress to automate tests.' },
            { title: 'Learn API testing', description: 'Understand how to test APIs using tools like Postman.' },
        ],
    },
    {
      id: 'ui-ux-design',
      name: 'UI/UX Design',
      icon: 'design',
      description: 'Design user interfaces and experiences for digital products.',
      details: 'UI/UX designers are responsible for the look, feel, and overall user experience of a product. UX (User Experience) design focuses on the user\'s journey and making the product easy to use, while UI (User Interface) design focuses on the visual design and layout. It\'s a creative field that requires empathy and problem-solving skills.',
      relatedFields: ['product-design', 'frontend-development'],
      roadmap: [
        { title: 'Learn design principles', description: 'Study the fundamentals of design, including color theory, typography, and layout.' },
        { title: 'Master a design tool', description: 'Become proficient in a design tool like Figma, Sketch, or Adobe XD.' },
        { title: 'Study user research methods', description: 'Learn how to conduct user research to understand user needs.' },
        { title: 'Learn prototyping and wireframing', description: 'Master the process of creating wireframes and interactive prototypes.' },
        { title: 'Build a portfolio', description: 'Create 10-15 design projects to showcase your skills.' },
      ],
    },
    {
        id: 'product-design',
        name: 'Product Design',
        icon: 'design',
        description: 'Own the entire design process from research to final product.',
        details: 'Product designers have a broad role that encompasses the entire design process of a product, from initial research and ideation to final UI design and user testing. They work closely with product managers and engineers to ensure the product is both user-friendly and meets business goals.',
        relatedFields: ['ui-ux-design', 'product-management'],
        roadmap: [
            { title: 'Master UX/UI design first', description: 'Build a strong foundation in both UX and UI design.' },
            { title: 'Learn product management basics', description: 'Understand the role of a product manager and product strategy.' },
            { title: 'Study business and metrics', description: 'Learn how to use data and metrics to inform design decisions.' },
            { title: 'Learn user research and testing', description: 'Become an expert in user research and usability testing.' },
            { title: 'Build case studies', description: 'Create detailed case studies for your portfolio that showcase your entire design process.' },
        ],
    },
    {
        id: 'blockchain-development',
        name: 'Blockchain Development',
        icon: 'code',
        description: 'Build decentralized applications and smart contracts.',
        details: 'Blockchain developers build applications on blockchain platforms like Ethereum. They write smart contracts (self-executing contracts with the terms of the agreement directly written into code) and develop decentralized applications (dApps). This is a rapidly evolving field with high demand.',
        relatedFields: ['backend-development', 'cybersecurity-specialist'],
        roadmap: [
            { title: 'Learn blockchain fundamentals', description: 'Understand the core concepts of blockchain technology.' },
            { title: 'Master JavaScript/TypeScript', description: 'Become proficient in JavaScript or TypeScript for dApp development.' },
            { title: 'Learn Solidity', description: 'Master Solidity, the primary language for writing smart contracts on Ethereum.' },
            { title: 'Study smart contract security', description: 'Learn about common vulnerabilities and best practices for secure smart contracts.' },
            { title: 'Build dApps and smart contracts', description: 'Create 5-10 projects to build your portfolio.' },
        ],
    },
    {
        id: 'ar-vr-development',
        name: 'AR/VR Development',
        icon: 'game',
        description: 'Create immersive augmented and virtual reality experiences.',
        details: 'AR/VR developers create applications for augmented reality (AR) and virtual reality (VR) devices. They use game engines like Unity and Unreal Engine to build immersive experiences for a variety of platforms, from mobile AR apps to high-end VR headsets.',
        relatedFields: ['game-development', 'computer-vision-engineer'],
        roadmap: [
            { title: 'Learn Unity and C#', description: 'Master the Unity game engine and the C# programming language.' },
            { title: 'Study 3D mathematics', description: 'Understand the math behind 3D graphics and transformations.' },
            { title: 'Learn AR development', description: 'Learn to build AR applications using ARKit or ARCore.' },
            { title: 'Study VR development', description: 'Understand the principles of VR development and build VR experiences.' },
            { title: 'Build AR/VR applications', description: 'Create 5-8 AR/VR projects for your portfolio.' },
        ],
    },
    {
        id: 'iot-engineering',
        name: 'IoT Engineering',
        icon: 'server',
        description: 'Build connected devices and systems that communicate over the internet.',
        details: 'IoT engineers work on the Internet of Things (IoT), connecting physical devices to the internet. They work with microcontrollers like Arduino and Raspberry Pi, program in languages like C/C++, and use IoT platforms on the cloud to manage and collect data from connected devices.',
        relatedFields: ['backend-development', 'embedded-systems'],
        roadmap: [
            { title: 'Learn electronics basics', description: 'Understand the fundamentals of electronics and circuits.' },
            { title: 'Master Arduino/Raspberry Pi', description: 'Become proficient in using these popular microcontrollers.' },
            { title: 'Learn IoT communication protocols', description: 'Understand protocols like MQTT and CoAP for device communication.' },
            { title: 'Study cloud IoT platforms', description: 'Learn to use platforms like AWS IoT or Azure IoT.' },
            { title: 'Build IoT projects', description: 'Create 5-10 IoT projects to gain practical experience.' },
        ],
    },
    {
        id: 'robotics-engineering',
        name: 'Robotics Engineering',
        icon: 'devops',
        description: 'Design, build, and program robots and robotic systems.',
        details: 'Robotics engineers design, build, and program robots. This multidisciplinary field combines mechanical engineering, electrical engineering, and computer science. They use tools like the Robot Operating System (ROS) and programming languages like Python and C++ to bring robots to life.',
        relatedFields: ['computer-vision-engineer', 'machine-learning-engineer'],
        roadmap: [
            { title: 'Learn Python and C++', description: 'Master the programming languages used in robotics.' },
            { title: 'Study robotics fundamentals', description: 'Understand the mechanics, kinematics, and control of robots.' },
            { title: 'Learn ROS', description: 'Master the Robot Operating System (ROS) for building robot applications.' },
            { title: 'Master computer vision basics', description: 'Learn how to use cameras and computer vision in robotics.' },
            { title: 'Build robotics projects', description: 'Create hands-on robotics projects to apply your skills.' },
        ],
    },
    {
        id: 'ai-natural-language-processing',
        name: 'AI & Natural Language Processing',
        icon: 'ml',
        description: 'Build AI systems that understand and generate human language.',
        details: 'NLP engineers build AI systems that can understand, interpret, and generate human language. They work with large language models (LLMs), use libraries like Hugging Face, and apply deep learning techniques to tasks like sentiment analysis, machine translation, and chatbots.',
        relatedFields: ['machine-learning-engineer', 'data-science'],
        roadmap: [
            { title: 'Strong Python and ML foundation', description: 'Have a strong foundation in Python and machine learning.' },
            { title: 'Learn NLP fundamentals', description: 'Understand the basics of natural language processing.' },
            { title: 'Study deep learning for NLP', description: 'Learn how to apply deep learning to NLP tasks.' },
            { title: 'Master transformer models', description: 'Understand the transformer architecture that powers modern LLMs.' },
            { title: 'Work with LLM APIs', description: 'Learn to use APIs from OpenAI, Google, and others to build applications.' },
        ],
    },
    {
        id: 'product-management',
        name: 'Product Management',
        icon: 'design',
        description: 'Define product strategy, prioritize features, and lead product development.',
        details: 'Product managers are responsible for the success of a product. They define the product vision, strategy, and roadmap, and work with cross-functional teams of engineers, designers, and marketers to bring the product to life. This is a leadership role that requires a mix of business acumen, technical knowledge, and user empathy.',
        relatedFields: ['product-design', 'business-analyst'],
        roadmap: [
            { title: 'Understand product management fundamentals', description: 'Learn the core concepts of product management.' },
            { title: 'Learn user research and analytics', description: 'Understand how to use data and user research to make product decisions.' },
            { title: 'Study Agile and Scrum', description: 'Learn the methodologies used to build and ship products.' },
            { title: 'Gain technical knowledge', description: 'Develop a basic understanding of how software is built.' },
            { title: 'Work on case studies', description: 'Practice your skills by working on product case studies and mock projects.' },
        ],
    },
    {
        id: 'it-project-management',
        name: 'IT Project Management',
        icon: 'devops',
        description: 'Plan, execute, and deliver IT projects on time and within budget.',
        details: 'IT project managers are responsible for planning, executing, and closing IT projects. They manage resources, timelines, and budgets to ensure that projects are delivered successfully. This role requires strong organizational and communication skills.',
        relatedFields: ['product-management', 'scrum-master'],
        roadmap: [
            { title: 'Learn project management fundamentals', description: 'Understand the core principles of project management.' },
            { title: 'Master Agile/Scrum', description: 'Learn the Agile and Scrum methodologies for managing projects.' },
            { title: 'Get Scrum Master certification', description: 'Earn the Certified ScrumMaster (CSM) certification.' },
            { title: 'Gain technical understanding', description: 'Develop a general understanding of the technologies involved in your projects.' },
            { title: 'Study PMP methodology', description: 'Consider learning the PMP methodology for traditional project management.' },
        ],
    },
    {
        id: 'scrum-master',
        name: 'Scrum Master / Agile Coach',
        icon: 'devops',
        description: 'Facilitate Agile processes and help teams work efficiently.',
        details: 'Scrum masters are facilitators for teams using the Scrum framework. They help the team follow Scrum practices, remove impediments, and foster an environment of continuous improvement. Agile coaches work at a broader level, helping organizations adopt and improve their Agile practices.',
        relatedFields: ['it-project-management', 'product-management'],
        roadmap: [
            { title: 'Learn Agile principles', description: 'Deeply understand the principles of the Agile Manifesto.' },
            { title: 'Master Scrum framework', description: 'Become an expert in the Scrum framework.' },
            { title: 'Get CSM certification', description: 'Earn the Certified ScrumMaster (CSM) certification.' },
            { title: 'Practice facilitation skills', description: 'Develop your skills in facilitating meetings and workshops.' },
            { title: 'Get advanced certifications', description: 'Consider advanced certifications like A-CSM or CSP.' },
        ],
    },
    {
        id: 'enterprise-architecture',
        name: 'Enterprise Architecture',
        icon: 'server',
        description: 'Design and oversee an organization\'s entire IT architecture and strategy.',
        details: 'Enterprise architects are responsible for the high-level design of an organization\'s IT systems. They ensure that the IT strategy is aligned with the business strategy and that the technology architecture is scalable, secure, and efficient. This is a senior role that requires extensive experience.',
        relatedFields: ['solutions-architect', 'cloud-engineering'],
        roadmap: [
            { title: 'Gain 5-10 years of IT experience', description: 'This is a senior role that requires significant experience.' },
            { title: 'Learn TOGAF framework', description: 'Study The Open Group Architecture Framework (TOGAF).' },
            { title: 'Master multiple technology domains', description: 'Become an expert in several areas of technology.' },
            { title: 'Study business strategy', description: 'Understand how to align technology with business goals.' },
            { title: 'Get TOGAF certification', description: 'Earn the TOGAF certification to validate your skills.' },
        ],
    },
    {
        id: 'technical-writing',
        name: 'Technical Writing',
        icon: 'design',
        description: 'Create documentation, user guides, and API documentation for technical products.',
        details: 'Technical writers create clear and concise documentation for technical products. They write user manuals, API documentation, and other materials that help people understand and use technology. This role is a great fit for those who enjoy both writing and technology.',
        relatedFields: ['api-development-integration', 'quality-assurance'],
        roadmap: [
            { title: 'Improve technical writing skills', description: 'Practice writing clearly and concisely about technical topics.' },
            { title: 'Learn basic programming concepts', description: 'Understand the basics of programming to better document software.' },
            { title: 'Master documentation tools', description: 'Learn to use tools like Markdown, Confluence, and ReadMe.' },
            { title: 'Study API documentation', description: 'Learn how to write effective API documentation using tools like Swagger.' },
            { title: 'Build a writing portfolio', description: 'Create a portfolio of your writing samples to showcase your skills.' },
        ],
    },
    {
        id: 'digital-marketing',
        name: 'Digital Marketing (Technical)',
        icon: 'ml',
        description: 'Drive online marketing through SEO, SEM, content marketing, and analytics.',
        details: 'Technical digital marketers use a data-driven approach to online marketing. They specialize in areas like Search Engine Optimization (SEO), Search Engine Marketing (SEM), and marketing analytics. This role requires a blend of marketing creativity and analytical skill.',
        relatedFields: ['data-science', 'business-intelligence-analyst'],
        roadmap: [
            { title: 'Learn SEO fundamentals', description: 'Understand the basics of search engine optimization.' },
            { title: 'Master Google Analytics', description: 'Become proficient in using Google Analytics to track and analyze website traffic.' },
            { title: 'Learn SEM and Google Ads', description: 'Learn how to run and optimize paid search campaigns.' },
            { title: 'Study content marketing', description: 'Understand how to create and distribute valuable content.' },
            { title: 'Learn social media marketing', description: 'Learn how to use social media to reach and engage customers.' },
        ],
    },
    {
        id: 'computer-vision-engineer',
        name: 'Computer Vision Engineer',
        icon: 'ml',
        description: 'Build systems that enable computers to understand and process visual information.',
        details: 'Computer vision engineers build systems that can "see" and interpret visual information from the world. They use deep learning and image processing techniques to work on tasks like object detection, image recognition, and autonomous driving. This is a specialized area of AI.',
        relatedFields: ['machine-learning-engineer', 'robotics-engineering'],
        roadmap: [
            { title: 'Strong Python and ML foundation', description: 'Have a strong foundation in Python and machine learning.' },
            { title: 'Learn image processing basics', description: 'Understand the fundamentals of image processing.' },
            { title: 'Master OpenCV', description: 'Become proficient in using the OpenCV library for computer vision tasks.' },
            { title: 'Study deep learning for CV', description: 'Learn how to apply deep learning to computer vision.' },
            { title: 'Learn modern architectures', description: 'Understand modern computer vision architectures like CNNs.' },
        ],
    },
    {
        id: 'solutions-architect',
        name: 'Solutions Architect',
        icon: 'server',
        description: 'Design technical solutions that meet business requirements.',
        details: 'Solutions architects design the high-level technical solutions for business problems. They work with stakeholders to understand their needs and then design a solution that is scalable, reliable, and cost-effective. This is a senior role that requires a deep understanding of technology and business.',
        relatedFields: ['enterprise-architecture', 'cloud-engineering'],
        roadmap: [
            { title: 'Gain 3-5 years development experience', description: 'This role requires significant prior experience as a developer.' },
            { title: 'Learn system design principles', description: 'Master the principles of designing large-scale systems.' },
            { title: 'Master cloud architecture', description: 'Become an expert in designing solutions on a cloud platform.' },
            { title: 'Study design patterns', description: 'Learn about common software design patterns.' },
            { title: 'Get cloud architect certification', description: 'Earn a certification like AWS Certified Solutions Architect.' },
        ],
    },
    {
        id: 'business-analyst',
        name: 'Business Analyst',
        icon: 'data',
        description: 'Bridge business needs and technical solutions through requirements analysis.',
        details: 'Business analysts work as a bridge between the business and technical teams. They gather and analyze business requirements and translate them into technical specifications for the development team. This role requires strong analytical and communication skills.',
        relatedFields: ['product-management', 'it-project-management'],
        roadmap: [
            { title: 'Learn business analysis fundamentals', description: 'Understand the core concepts of business analysis.' },
            { title: 'Master SQL and Excel', description: 'Become proficient in using SQL and Excel for data analysis.' },
            { title: 'Study requirements elicitation', description: 'Learn the techniques for gathering and documenting requirements.' },
            { title: 'Learn process modeling', description: 'Understand how to model and improve business processes.' },
            { title: 'Get BA certifications', description: 'Consider certifications like CBAP or PMI-PBA.' },
        ],
    }
  ];
  
  // Dummy related fields for now
  ROADMAP_DATA.forEach(field => {
      if (field.relatedFields.length === 0) {
          const otherFields = ROADMAP_DATA.filter(f => f.id !== field.id);
          const randomField1 = otherFields[Math.floor(Math.random() * otherFields.length)];
          let randomField2 = otherFields[Math.floor(Math.random() * otherFields.length)];
          while (randomField2.id === randomField1.id) {
              randomField2 = otherFields[Math.floor(Math.random() * otherFields.length)];
          }
          field.relatedFields = [randomField1.id, randomField2.id];
      }
  })
  
  // Make sure all related fields exist
  ROADMAP_DATA.forEach(field => {
      field.relatedFields = field.relatedFields.filter(relatedId => ROADMAP_DATA.some(f => f.id === relatedId));
  });
  
  // Add a placeholder for fields with few relations
  ROADMAP_DATA.forEach(field => {
      if (field.relatedFields.length < 2) {
          const otherFields = ROADMAP_DATA.filter(f => f.id !== field.id && !field.relatedFields.includes(f.id));
          while (field.relatedFields.length < 2 && otherFields.length > 0) {
              const randomField = otherFields.pop();
              if (randomField) {
                  field.relatedFields.push(randomField.id);
              }
          }
      }
  })
  
