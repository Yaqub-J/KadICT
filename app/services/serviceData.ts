export interface Service {
  slug: string;
  title: string;
  icon: string;
  iconColor: string;
  description: string;
  overview: string;
  features: string[];
  demoContent?: {
    type: 'image' | 'video' | 'link';
    src: string;
    caption?: string;
  }[];
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: 'erp-systems',
    title: 'ERP Systems',
    icon: 'bi-briefcase',
    iconColor: '#f57813',
    description: 'Our team of experts specializes in the development, design, and deployment of Enterprise Resource Planning (ERP) systems.',
    overview: 'We provide comprehensive ERP solutions that integrate all facets of your business operations, from inventory and order management to accounting and human resources. Our custom-built ERP systems are designed to streamline your business processes, improve efficiency, and provide real-time insights into your operations.',
    features: [
      'Custom ERP Development',
      'System Integration',
      'Data Migration',
      'Training and Support',
      'Cloud and On-Premise Solutions',
      'Real-time Reporting and Analytics'
    ],
    demoContent: [
      {
        type: 'link',
        src: 'https://kadvreg.net/index.php',
        caption: 'Kaduna Automated Vehicle Registration Platform - Nigeria\'s first fully automated vehicle registration system'
      }
    ],
    benefits: [
      'Improved operational efficiency',
      'Better decision-making with real-time data',
      'Reduced operational costs',
      'Enhanced collaboration across departments',
      'Scalable solutions that grow with your business'
    ]
  },
  {
    slug: 'training',
    title: 'Training',
    icon: 'bi-mortarboard',
    iconColor: '#15a04a',
    description: 'Our team of certified instructors is dedicated to providing top-notch training on the latest and most in-demand technologies.',
    overview: 'KAD ICT Hub has successfully trained over 20,000 individuals in various technology domains. Our training programs are designed to equip participants with practical, industry-relevant skills that make them immediately employable or capable of launching their own tech ventures.',
    features: [
      'Hands-on practical training',
      'Industry-certified instructors',
      'Modern learning facilities',
      'Flexible schedules (weekday and weekend options)',
      'Certificate upon completion',
      'Job placement assistance'
    ],
    demoContent: [],
    benefits: [
      'Gain skills in high-demand technologies',
      'Learn from industry experts',
      'Build a portfolio of projects',
      'Network with fellow tech enthusiasts',
      'Access to ongoing mentorship'
    ]
  },
  {
    slug: 'software-testing',
    title: 'Software Testing',
    icon: 'bi-pc-display-horizontal',
    iconColor: '#d90769',
    description: 'Our software testing services are second to none. We offer comprehensive and reliable testing solutions that ensure the quality and performance of your digital products.',
    overview: 'We provide end-to-end software testing services that help you deliver high-quality, bug-free applications. Our testing methodologies include manual testing, automated testing, performance testing, and security testing to ensure your software meets the highest standards.',
    features: [
      'Manual and Automated Testing',
      'Performance Testing',
      'Security Testing',
      'User Acceptance Testing (UAT)',
      'Regression Testing',
      'Mobile App Testing',
      'API Testing'
    ],
    demoContent: [],
    benefits: [
      'Reduced bugs and errors in production',
      'Improved user experience',
      'Faster time to market',
      'Enhanced security',
      'Cost savings from early bug detection'
    ]
  },
  {
    slug: 'blockchain-lab',
    title: 'Blockchain Lab',
    icon: 'bi-currency-bitcoin',
    iconColor: '#15bfbc',
    description: 'The Africa Blockchain Lab, a groundbreaking initiative in partnership with Satoshi Capital Advisors, is the continent\'s premier destination for blockchain research, development, and innovation.',
    overview: 'Our Blockchain Lab is dedicated to advancing blockchain technology across Africa. We provide research, development, training, and consulting services to help businesses and individuals harness the power of blockchain and cryptocurrency technologies.',
    features: [
      'Blockchain Research and Development',
      'Smart Contract Development',
      'Cryptocurrency Solutions',
      'NFT Development',
      'Blockchain Training Programs',
      'Consulting Services',
      'DApp Development'
    ],
    demoContent: [],
    benefits: [
      'Access to cutting-edge blockchain expertise',
      'Custom blockchain solutions',
      'Training on blockchain technologies',
      'Partnership with international blockchain experts',
      'Contribution to Africa\'s blockchain ecosystem'
    ]
  },
  {
    slug: 'incubation-acceleration',
    title: 'Incubation & Acceleration',
    icon: 'bi-reception-4',
    iconColor: '#f5cf13',
    description: 'Our incubation and acceleration programs offer a comprehensive range of services, including mentorship, funding opportunities, workspace, and access to industry experts.',
    overview: 'We have successfully incubated and accelerated numerous startups, including 55 women-led startups through the Academy for Women Entrepreneurs program in partnership with the U.S. Embassy. Our program provides the resources, mentorship, and funding opportunities needed to turn your innovative ideas into successful businesses.',
    features: [
      'Mentorship from Industry Experts',
      'Access to Funding and Grants',
      'Co-working Space',
      'Business Development Support',
      'Networking Opportunities',
      'Technical Resources',
      'Marketing and Branding Support'
    ],
    demoContent: [],
    benefits: [
      'Transform your idea into a viable business',
      'Access to seed funding',
      'Expert guidance and mentorship',
      'Collaborative workspace',
      'Connections to investors and partners',
      'Structured program with measurable milestones'
    ]
  },
  {
    slug: 'big-data-cybersecurity',
    title: 'Big Data & Cyber-security',
    icon: 'bi-file-lock2',
    iconColor: '#1335f5',
    description: 'Our unique approach to combining big data and cybersecurity sets us apart from the competition.',
    overview: 'We provide comprehensive big data analytics and cybersecurity solutions to help organizations protect their digital assets while extracting valuable insights from their data. Our services combine advanced analytics with robust security measures to ensure your data is both useful and protected.',
    features: [
      'Big Data Analytics',
      'Security Audits and Assessment',
      'Penetration Testing',
      'Security Information and Event Management (SIEM)',
      'Data Privacy and Compliance',
      'Threat Intelligence',
      'Incident Response'
    ],
    demoContent: [],
    benefits: [
      'Protect your digital assets',
      'Gain insights from your data',
      'Ensure regulatory compliance',
      'Proactive threat detection',
      'Reduced risk of data breaches',
      'Enhanced business intelligence'
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}
