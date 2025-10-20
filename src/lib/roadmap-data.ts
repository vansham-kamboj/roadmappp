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
];
