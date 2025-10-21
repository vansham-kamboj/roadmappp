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
    description: 'Build beautiful and interactive user interfaces for the web.',
    details: 'Frontend developers are responsible for the user-facing part of a website. They use HTML, CSS, and JavaScript to create the look, feel, and interactivity of a web application. It\'s a creative field that blends design with programming.',
    relatedFields: ['ui-ux-design', 'backend-development'],
    roadmap: [
      { title: 'Learn HTML', description: 'The backbone of all web pages.' },
      { title: 'Learn CSS', description: 'Style your web pages and make them look great.' },
      { title: 'Learn JavaScript', description: 'Add interactivity and logic to your sites.' },
      { title: 'Master a Framework', description: 'Learn React, Vue, or Angular for complex apps.' },
      { title: 'Build and Deploy', description: 'Create projects and share them with the world.' },
    ],
  },
  {
    id: 'backend-development',
    name: 'Backend Development',
    icon: 'server',
    description: 'Power applications with server-side logic, databases, and APIs.',
    details: 'Backend developers work on the server-side of applications. They manage databases, build APIs, and write the logic that powers the frontend. It\'s a crucial role for any dynamic web application, focusing on scalability, security, and performance.',
    relatedFields: ['frontend-development', 'devops'],
    roadmap: [
      { title: 'Choose a Language', description: 'Pick a language like Node.js, Python, or Go.' },
      { title: 'Understand Databases', description: 'Learn about SQL and NoSQL databases.' },
      { title: 'Build an API', description: 'Create RESTful or GraphQL APIs to serve data.' },
      { title: 'Authentication & Security', description: 'Learn how to secure your application.' },
      { title: 'Containerization', description: 'Use Docker to package and run your apps.' },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: 'devops',
    description: 'Automate and streamline the software development and deployment lifecycle.',
    details: 'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). The goal is to shorten the systems development life cycle and provide continuous delivery with high software quality. It\'s all about automation, infrastructure, and collaboration.',
    relatedFields: ['backend-development', 'cloud-computing'],
    roadmap: [
      { title: 'Learn a Scripting Language', description: 'Bash, Python, or Go are essential.' },
      { title: 'Understand Linux & Networking', description: 'Master the fundamentals of the command line.' },
      { title: 'Infrastructure as Code', description: 'Learn Terraform or Pulumi to manage infra.' },
      { title: 'CI/CD Pipelines', description: 'Automate your build, test, and deploy process.' },
      { title: 'Container Orchestration', description: 'Learn Kubernetes to manage containers at scale.' },
    ],
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    icon: 'design',
    description: 'Create user-centered designs that are both intuitive and beautiful.',
    details: 'UI/UX Design focuses on creating a seamless and enjoyable experience for users. UX (User Experience) is about the overall feel of the experience, while UI (User Interface) is about the visual design and layout. It\'s a field that requires empathy, creativity, and problem-solving skills.',
    relatedFields: ['frontend-development'],
    roadmap: [
      { title: 'Design Fundamentals', description: 'Learn about color theory, typography, and layout.' },
      { title: 'User Research', description: 'Understand your users and their needs.' },
      { title: 'Wireframing & Prototyping', description: 'Create low and high-fidelity mockups.' },
      { title: 'Master a Design Tool', description: 'Learn Figma, Sketch, or Adobe XD.' },
      { title: 'Usability Testing', description: 'Get feedback and iterate on your designs.' },
    ],
  },
   {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    icon: 'default',
    description: 'Leverage cloud platforms like AWS, Azure, or GCP to build scalable applications.',
    details: 'Cloud computing involves delivering different services through the Internet. These resources include tools and applications like data storage, servers, databases, networking, and software. Instead of keeping files on a proprietary hard drive or local storage device, cloud-based storage makes it possible to save them to a remote database.',
    relatedFields: ['backend-development', 'devops'],
    roadmap: [
      { title: 'Cloud Fundamentals', description: 'Understand core concepts like IaaS, PaaS, SaaS.' },
      { title: 'Choose a Platform', description: 'Specialize in AWS, Azure, or Google Cloud.' },
      { title: 'Core Services', description: 'Learn about compute, storage, and networking services.' },
      { title: 'Serverless Architecture', description: 'Build applications without managing servers.' },
      { title: 'Cloud Security', description: 'Learn best practices for securing cloud resources.' },
    ],
  },
  {
    id: 'data-science',
    name: 'Data Science',
    icon: 'data',
    description: 'Extract insights and knowledge from data using scientific methods.',
    details: 'Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from structured and unstructured data, and apply knowledge and actionable insights from data across a broad range of application domains.',
    relatedFields: ['machine-learning', 'backend-development'],
    roadmap: [
      { title: 'Learn Python & SQL', description: 'The two most important languages for data.' },
      { title: 'Statistics & Probability', description: 'Understand the mathematical foundations.' },
      { title: 'Data Wrangling & Visualization', description: 'Clean, transform, and visualize data.' },
      { title: 'Machine Learning Basics', description: 'Learn about supervised and unsupervised learning.' },
      { title: 'Build a Portfolio', description: 'Work on real-world datasets and projects.' },
    ],
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    icon: 'ml',
    description: 'Build systems that can learn and make predictions from data.',
    details: 'Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.',
    relatedFields: ['data-science', 'devops'],
    roadmap: [
      { title: 'Master Python & Libraries', description: 'NumPy, Pandas, Scikit-learn are key.' },
      { title: 'Advanced Math Concepts', description: 'Linear Algebra, Calculus, and Optimization.' },
      { title: 'Deep Learning', description: 'Learn about neural networks with TensorFlow/PyTorch.' },
      { title: 'Model Deployment', description: 'Learn how to serve your models in production.' },
      { title: 'Specializations', description: 'Explore NLP, Computer Vision, or Reinforcement Learning.' },
    ],
  },
  {
    id: 'game-development',
    name: 'Game Development',
    icon: 'game',
    description: 'Create immersive and interactive worlds and experiences.',
    details: 'Game development is the art of creating games and describes the design, development and release of a game. It may involve concept generation, design, build, test and release. It\'s a multidisciplinary field, involving programming, art, sound design, and storytelling.',
    relatedFields: ['ui-ux-design', 'mobile-development'],
    roadmap: [
      { title: 'Choose an Engine', description: 'Learn Unity (C#) or Unreal Engine (C++).' },
      { title: 'Programming Fundamentals', description: 'Master the language of your chosen engine.' },
      { title: 'Game Design Principles', description: 'Learn about loops, mechanics, and player feedback.' },
      { title: '3D/2D Art Pipeline', description: 'Understand how assets are created and imported.' },
      { title: 'Ship a Small Game', description: 'Complete and publish a small-scale project.' },
    ],
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    icon: 'mobile',
    description: 'Build applications for iOS and Android devices.',
    details: 'Mobile development involves creating software applications that run on mobile devices. You can build natively for iOS (Swift) or Android (Kotlin), or use cross-platform frameworks like React Native or Flutter to target both platforms with a single codebase.',
    relatedFields: ['frontend-development', 'backend-development'],
    roadmap: [
      { title: 'Choose a Platform', description: 'Native (Swift/Kotlin) or Cross-Platform (Flutter/React Native).' },
      { title: 'UI/UX for Mobile', description: 'Understand mobile-specific design patterns.' },
      { title: 'Networking & Data', description: 'Fetch and store data from APIs.' },
      { title: 'Platform-specific APIs', description: 'Access features like camera, GPS, and notifications.' },
      { title: 'Publish to App Store', description: 'Learn the process of submitting your app.' },
    ],
  },
];
