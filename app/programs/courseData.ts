export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
export type CourseCategory = 'Development' | 'Design' | 'Security' | 'Data' | 'Hardware' | 'Business';

export interface Lesson {
  id: string;
  title: string;
  duration: string; // e.g., "15 min"
  type: 'video' | 'reading' | 'quiz' | 'assignment';
  isPreview?: boolean; // Can be viewed without enrollment
}

export interface Module {
  id: string;
  title: string;
  duration?: string;
  lessons: Lesson[];
}

export interface Review {
  id: string;
  name: string;
  studentName: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface Course {
  slug: string;
  title: string;
  icon: string;
  iconColor: string;
  category: CourseCategory;
  level: CourseLevel;
  description: string;
  overview: string;
  duration: string; // Total course duration
  price: number; // 0 for free
  instructor: {
    name: string;
    title: string;
    bio: string;
    avatar?: string;
  };
  thumbnail?: string;
  studentsEnrolled: number;
  rating: number;
  reviewCount: number;
  learningOutcomes: string[];
  prerequisites: string[];
  curriculum: Module[];
  includes: string[]; // What's included (videos, PDFs, certificate, etc.)
  reviews: Review[];
}

export const courses: Course[] = [
  {
    slug: 'data-analysis',
    title: 'DATA ANALYSIS',
    icon: 'bi-graph-up',
    iconColor: '#0066cc',
    category: 'Data',
    level: 'advanced',
    description: 'Uncover the power of data and transform raw information into actionable insights with our Data Analysis course.',
    overview: 'Master the art and science of data analysis. Learn to collect, process, and analyze complex datasets using industry-standard tools. This comprehensive course covers statistical analysis, data visualization, and predictive modeling techniques that are in high demand across industries.',
    duration: '12 weeks',
    price: 175000,
    instructor: {
      name: 'Dr. Amina Mohammed',
      title: 'Senior Data Scientist',
      bio: 'With over 10 years of experience in data science and analytics, Dr. Amina has worked with Fortune 500 companies and trained thousands of students in data analysis.'
    },
    studentsEnrolled: 2450,
    rating: 4.8,
    reviewCount: 342,
    learningOutcomes: [
      'Master Excel, SQL, and Python for data analysis',
      'Create compelling data visualizations',
      'Perform statistical analysis and hypothesis testing',
      'Build predictive models using machine learning',
      'Present data insights to stakeholders'
    ],
    prerequisites: [
      'Basic computer skills',
      'Understanding of mathematics (statistics helpful but not required)'
    ],
    curriculum: [
      {
        id: 'module-1',
        title: 'Introduction to Data Analysis',
        lessons: [
          { id: 'lesson-1-1', title: 'What is Data Analysis?', duration: '20 min', type: 'video', isPreview: true },
          { id: 'lesson-1-2', title: 'Data Analysis Tools Overview', duration: '15 min', type: 'video' },
          { id: 'lesson-1-3', title: 'Setting Up Your Environment', duration: '25 min', type: 'video' },
          { id: 'lesson-1-4', title: 'Module 1 Quiz', duration: '10 min', type: 'quiz' }
        ]
      },
      {
        id: 'module-2',
        title: 'Excel for Data Analysis',
        lessons: [
          { id: 'lesson-2-1', title: 'Excel Fundamentals', duration: '30 min', type: 'video' },
          { id: 'lesson-2-2', title: 'Advanced Formulas and Functions', duration: '35 min', type: 'video' },
          { id: 'lesson-2-3', title: 'Pivot Tables and Charts', duration: '40 min', type: 'video' },
          { id: 'lesson-2-4', title: 'Excel Project', duration: '60 min', type: 'assignment' }
        ]
      },
      {
        id: 'module-3',
        title: 'SQL and Database Querying',
        lessons: [
          { id: 'lesson-3-1', title: 'Introduction to SQL', duration: '25 min', type: 'video' },
          { id: 'lesson-3-2', title: 'Advanced SQL Queries', duration: '45 min', type: 'video' },
          { id: 'lesson-3-3', title: 'SQL Practice Exercise', duration: '30 min', type: 'assignment' }
        ]
      },
      {
        id: 'module-4',
        title: 'Python for Data Analysis',
        lessons: [
          { id: 'lesson-4-1', title: 'Python Basics', duration: '30 min', type: 'video' },
          { id: 'lesson-4-2', title: 'Pandas Library', duration: '50 min', type: 'video' },
          { id: 'lesson-4-3', title: 'Data Visualization with Python', duration: '45 min', type: 'video' }
        ]
      }
    ],
    includes: [
      '40+ hours of video content',
      'Downloadable resources and datasets',
      'Hands-on projects',
      'Certificate of completion',
      'Lifetime access'
    ],
    reviews: [
      {
        id: 'review-1',
        name: 'John Okafor',
        studentName: 'John Okafor',
        rating: 5,
        comment: 'Excellent course! The instructor explains complex concepts in a very understandable way.',
        date: '2025-01-15'
      },
      {
        id: 'review-2',
        name: 'Sarah Ibrahim',
        studentName: 'Sarah Ibrahim',
        rating: 4,
        comment: 'Great content and practical examples. Would have loved more real-world case studies.',
        date: '2025-01-10'
      }
    ]
  },
  {
    slug: 'digital-literacy',
    title: 'DIGITAL LITERACY',
    icon: 'bi-laptop',
    iconColor: '#28a745',
    category: 'Business',
    level: 'beginner',
    description: 'Empower yourself with essential digital skills to thrive in today\'s tech-driven world through our Digital Literacy course.',
    overview: 'Build a strong foundation in digital skills essential for the modern workplace. From basic computer operations to internet safety and digital communication, this course covers everything you need to confidently navigate the digital world.',
    duration: '6 weeks',
    price: 120000,
    instructor: {
      name: 'Mr. Chukwudi Eze',
      title: 'Digital Skills Trainer',
      bio: 'Chukwudi has been teaching digital literacy for over 8 years and has helped hundreds of beginners become confident computer users.'
    },
    studentsEnrolled: 5120,
    rating: 4.9,
    reviewCount: 678,
    learningOutcomes: [
      'Navigate operating systems confidently',
      'Use Microsoft Office suite effectively',
      'Browse the internet safely',
      'Communicate via email and digital platforms',
      'Understand digital security basics'
    ],
    prerequisites: ['None - this is a beginner course'],
    curriculum: [
      {
        id: 'module-1',
        title: 'Computer Fundamentals',
        lessons: [
          { id: 'lesson-1-1', title: 'Introduction to Computers', duration: '15 min', type: 'video', isPreview: true },
          { id: 'lesson-1-2', title: 'Operating Systems Basics', duration: '20 min', type: 'video' },
          { id: 'lesson-1-3', title: 'File Management', duration: '25 min', type: 'video' }
        ]
      },
      {
        id: 'module-2',
        title: 'Microsoft Office Suite',
        lessons: [
          { id: 'lesson-2-1', title: 'Microsoft Word Essentials', duration: '30 min', type: 'video' },
          { id: 'lesson-2-2', title: 'PowerPoint Presentations', duration: '30 min', type: 'video' },
          { id: 'lesson-2-3', title: 'Excel Basics', duration: '30 min', type: 'video' }
        ]
      },
      {
        id: 'module-3',
        title: 'Internet and Email',
        lessons: [
          { id: 'lesson-3-1', title: 'Web Browsing Essentials', duration: '20 min', type: 'video' },
          { id: 'lesson-3-2', title: 'Email Management', duration: '25 min', type: 'video' },
          { id: 'lesson-3-3', title: 'Online Safety', duration: '20 min', type: 'video' }
        ]
      }
    ],
    includes: [
      '20+ hours of video content',
      'Practice exercises',
      'Certificate of completion',
      'Lifetime access'
    ],
    reviews: []
  },
  {
    slug: 'graphics-design',
    title: 'GRAPHICS DESIGN',
    icon: 'bi-palette',
    iconColor: '#e83e8c',
    category: 'Design',
    level: 'beginner',
    description: 'Bring your creative visions to life and master the art of visual communication with our Graphics Design course.',
    overview: 'Unleash your creativity and learn professional graphic design. Master industry-standard tools like Adobe Photoshop, Illustrator, and CorelDRAW. Create stunning designs for print and digital media.',
    duration: '10 weeks',
    price: 145000,
    instructor: {
      name: 'Mrs. Blessing Adeyemi',
      title: 'Senior Graphic Designer',
      bio: 'Blessing has 12 years of experience in graphic design and has worked on campaigns for major brands across Nigeria.'
    },
    studentsEnrolled: 3890,
    rating: 4.7,
    reviewCount: 456,
    learningOutcomes: [
      'Master Adobe Photoshop and Illustrator',
      'Understand design principles and color theory',
      'Create logos, flyers, and marketing materials',
      'Design for both print and digital media',
      'Build a professional design portfolio'
    ],
    prerequisites: ['Basic computer skills', 'Creative mindset'],
    curriculum: [
      {
        id: 'module-1',
        title: 'Design Fundamentals',
        lessons: [
          { id: 'lesson-1-1', title: 'Introduction to Graphic Design', duration: '18 min', type: 'video', isPreview: true },
          { id: 'lesson-1-2', title: 'Design Principles', duration: '22 min', type: 'video' },
          { id: 'lesson-1-3', title: 'Color Theory', duration: '25 min', type: 'video' },
          { id: 'lesson-1-4', title: 'Typography Basics', duration: '20 min', type: 'video' }
        ]
      },
      {
        id: 'module-2',
        title: 'Adobe Photoshop Mastery',
        lessons: [
          { id: 'lesson-2-1', title: 'Photoshop Interface', duration: '20 min', type: 'video' },
          { id: 'lesson-2-2', title: 'Photo Editing Techniques', duration: '40 min', type: 'video' },
          { id: 'lesson-2-3', title: 'Advanced Photoshop Tools', duration: '35 min', type: 'video' },
          { id: 'lesson-2-4', title: 'Photoshop Project', duration: '60 min', type: 'assignment' }
        ]
      },
      {
        id: 'module-3',
        title: 'Adobe Illustrator',
        lessons: [
          { id: 'lesson-3-1', title: 'Vector Graphics Basics', duration: '25 min', type: 'video' },
          { id: 'lesson-3-2', title: 'Logo Design', duration: '45 min', type: 'video' },
          { id: 'lesson-3-3', title: 'Illustration Techniques', duration: '40 min', type: 'video' }
        ]
      }
    ],
    includes: [
      '35+ hours of video content',
      'Design templates and resources',
      'Real-world projects',
      'Certificate of completion',
      'Lifetime access'
    ],
    reviews: []
  },
  {
    slug: 'cyber-security',
    title: 'CYBER-SECURITY',
    icon: 'bi-shield-lock',
    iconColor: '#dc3545',
    category: 'Security',
    level: 'advanced',
    description: 'Safeguard digital landscapes and protect against online threats with our comprehensive Cybersecurity course.',
    overview: 'Become a cybersecurity professional. Learn to protect systems, networks, and data from cyber attacks. Cover ethical hacking, network security, cryptography, and incident response.',
    duration: '14 weeks',
    price: 190000,
    instructor: {
      name: 'Engr. Usman Abdullahi',
      title: 'Certified Ethical Hacker',
      bio: 'Usman is a cybersecurity consultant with CEH and CISSP certifications, protecting organizations from cyber threats for over 10 years.'
    },
    studentsEnrolled: 1890,
    rating: 4.9,
    reviewCount: 234,
    learningOutcomes: [
      'Understand cybersecurity fundamentals',
      'Perform ethical hacking and penetration testing',
      'Implement network security measures',
      'Respond to security incidents',
      'Prepare for industry certifications'
    ],
    prerequisites: [
      'Basic networking knowledge',
      'Understanding of operating systems',
      'Command line familiarity'
    ],
    curriculum: [
      {
        id: 'module-1',
        title: 'Cybersecurity Fundamentals',
        lessons: [
          { id: 'lesson-1-1', title: 'Introduction to Cybersecurity', duration: '20 min', type: 'video', isPreview: true },
          { id: 'lesson-1-2', title: 'Threat Landscape', duration: '25 min', type: 'video' },
          { id: 'lesson-1-3', title: 'Security Principles', duration: '30 min', type: 'video' }
        ]
      },
      {
        id: 'module-2',
        title: 'Ethical Hacking',
        lessons: [
          { id: 'lesson-2-1', title: 'Ethical Hacking Basics', duration: '30 min', type: 'video' },
          { id: 'lesson-2-2', title: 'Reconnaissance Techniques', duration: '40 min', type: 'video' },
          { id: 'lesson-2-3', title: 'Vulnerability Assessment', duration: '45 min', type: 'video' },
          { id: 'lesson-2-4', title: 'Penetration Testing', duration: '50 min', type: 'video' }
        ]
      },
      {
        id: 'module-3',
        title: 'Network Security',
        lessons: [
          { id: 'lesson-3-1', title: 'Network Security Fundamentals', duration: '35 min', type: 'video' },
          { id: 'lesson-3-2', title: 'Firewalls and IDS/IPS', duration: '40 min', type: 'video' },
          { id: 'lesson-3-3', title: 'VPNs and Encryption', duration: '35 min', type: 'video' }
        ]
      }
    ],
    includes: [
      '50+ hours of video content',
      'Lab exercises and simulations',
      'Industry certification prep',
      'Certificate of completion',
      'Lifetime access'
    ],
    reviews: []
  },
  {
    slug: 'it-siwes',
    title: 'IT & SIWES',
    icon: 'bi-briefcase',
    iconColor: '#6f42c1',
    category: 'Business',
    level: 'intermediate',
    description: 'Bridge the gap between theory and practice in Nigeria\'s tech industry through hands-on experience with our IT & SIWES program.',
    overview: 'Gain practical industry experience through our IT and SIWES program. Work on real projects, learn industry best practices, and prepare for your professional career in technology.',
    duration: '24 weeks',
    price: 160000,
    instructor: {
      name: 'Mr. Tunde Bakare',
      title: 'IT Project Manager',
      bio: 'Tunde has managed IT projects for over 15 years and has supervised hundreds of SIWES students, helping them transition into professional roles.'
    },
    studentsEnrolled: 1567,
    rating: 4.6,
    reviewCount: 189,
    learningOutcomes: [
      'Gain real-world IT experience',
      'Work on industry projects',
      'Learn professional workflows',
      'Build professional network',
      'Prepare for IT careers'
    ],
    prerequisites: [
      'Basic IT knowledge',
      'Currently enrolled in tertiary institution (for SIWES)'
    ],
    curriculum: [
      {
        id: 'module-1',
        title: 'Industry Orientation',
        lessons: [
          { id: 'lesson-1-1', title: 'Introduction to IT Industry', duration: '20 min', type: 'video', isPreview: true },
          { id: 'lesson-1-2', title: 'Professional Ethics', duration: '25 min', type: 'video' },
          { id: 'lesson-1-3', title: 'Workplace Communication', duration: '20 min', type: 'video' }
        ]
      },
      {
        id: 'module-2',
        title: 'Technical Skills Development',
        lessons: [
          { id: 'lesson-2-1', title: 'Project Management Basics', duration: '30 min', type: 'video' },
          { id: 'lesson-2-2', title: 'Agile Methodologies', duration: '35 min', type: 'video' },
          { id: 'lesson-2-3', title: 'Documentation Standards', duration: '25 min', type: 'video' }
        ]
      },
      {
        id: 'module-3',
        title: 'Practical Projects',
        lessons: [
          { id: 'lesson-3-1', title: 'Project Planning', duration: '40 min', type: 'video' },
          { id: 'lesson-3-2', title: 'Project Execution', duration: '120 min', type: 'assignment' },
          { id: 'lesson-3-3', title: 'Project Presentation', duration: '60 min', type: 'assignment' }
        ]
      }
    ],
    includes: [
      'Practical industry experience',
      'Project supervision',
      'SIWES certification',
      'Industry mentorship',
      'Job placement assistance'
    ],
    reviews: []
  },
  {
    slug: 'networking',
    title: 'NETWORKING',
    icon: 'bi-diagram-3',
    iconColor: '#17a2b8',
    category: 'Development',
    level: 'intermediate',
    description: 'Build and manage secure, efficient networks to connect the world and power modern communication with our Networking course.',
    overview: 'Master computer networking from fundamentals to advanced concepts. Learn to design, implement, and troubleshoot networks. Prepare for industry certifications like CCNA.',
    duration: '12 weeks',
    price: 155000,
    instructor: {
      name: 'Engr. Ibrahim Musa',
      title: 'Network Engineer',
      bio: 'Ibrahim is a certified network engineer (CCNA, CCNP) with 10+ years designing and managing enterprise networks.'
    },
    studentsEnrolled: 2234,
    rating: 4.7,
    reviewCount: 298,
    learningOutcomes: [
      'Understand network fundamentals and protocols',
      'Configure routers and switches',
      'Implement network security',
      'Troubleshoot network issues',
      'Prepare for CCNA certification'
    ],
    prerequisites: ['Basic IT knowledge', 'Understanding of computer systems'],
    curriculum: [
      {
        id: 'module-1',
        title: 'Network Fundamentals',
        lessons: [
          { id: 'lesson-1-1', title: 'Introduction to Networking', duration: '20 min', type: 'video', isPreview: true },
          { id: 'lesson-1-2', title: 'OSI Model', duration: '30 min', type: 'video' },
          { id: 'lesson-1-3', title: 'TCP/IP Protocol Suite', duration: '35 min', type: 'video' }
        ]
      },
      {
        id: 'module-2',
        title: 'Routing and Switching',
        lessons: [
          { id: 'lesson-2-1', title: 'Router Configuration', duration: '40 min', type: 'video' },
          { id: 'lesson-2-2', title: 'Switch Configuration', duration: '40 min', type: 'video' },
          { id: 'lesson-2-3', title: 'VLANs and Trunking', duration: '35 min', type: 'video' }
        ]
      }
    ],
    includes: [
      '40+ hours of video content',
      'Hands-on lab exercises',
      'CCNA prep materials',
      'Certificate of completion',
      'Lifetime access'
    ],
    reviews: []
  },
  {
    slug: 'programming',
    title: 'PROGRAMMING',
    icon: 'bi-code-slash',
    iconColor: '#fd7e14',
    category: 'Development',
    level: 'intermediate',
    description: 'Unlock the language of technology and create innovative solutions by mastering coding with our Programming course.',
    overview: 'Learn to code from scratch. Master programming fundamentals with Python, then expand to JavaScript and other languages. Build real-world applications and prepare for a software development career.',
    duration: '16 weeks',
    price: 165000,
    instructor: {
      name: 'Mr. Emeka Okonkwo',
      title: 'Senior Software Developer',
      bio: 'Emeka has 12 years of software development experience and has taught programming to over 3,000 students.'
    },
    studentsEnrolled: 4567,
    rating: 4.8,
    reviewCount: 589,
    learningOutcomes: [
      'Master programming fundamentals',
      'Code in Python and JavaScript',
      'Build web applications',
      'Understand algorithms and data structures',
      'Develop problem-solving skills'
    ],
    prerequisites: ['Basic computer skills', 'Logical thinking ability'],
    curriculum: [
      {
        id: 'module-1',
        title: 'Programming Fundamentals',
        lessons: [
          { id: 'lesson-1-1', title: 'Introduction to Programming', duration: '20 min', type: 'video', isPreview: true },
          { id: 'lesson-1-2', title: 'Variables and Data Types', duration: '25 min', type: 'video' },
          { id: 'lesson-1-3', title: 'Control Structures', duration: '30 min', type: 'video' },
          { id: 'lesson-1-4', title: 'Functions', duration: '30 min', type: 'video' }
        ]
      },
      {
        id: 'module-2',
        title: 'Python Programming',
        lessons: [
          { id: 'lesson-2-1', title: 'Python Basics', duration: '30 min', type: 'video' },
          { id: 'lesson-2-2', title: 'Object-Oriented Programming', duration: '45 min', type: 'video' },
          { id: 'lesson-2-3', title: 'Python Projects', duration: '60 min', type: 'assignment' }
        ]
      },
      {
        id: 'module-3',
        title: 'JavaScript and Web Development',
        lessons: [
          { id: 'lesson-3-1', title: 'JavaScript Fundamentals', duration: '35 min', type: 'video' },
          { id: 'lesson-3-2', title: 'DOM Manipulation', duration: '40 min', type: 'video' },
          { id: 'lesson-3-3', title: 'Building Interactive Web Pages', duration: '50 min', type: 'video' }
        ]
      }
    ],
    includes: [
      '60+ hours of video content',
      'Coding exercises',
      'Real-world projects',
      'Certificate of completion',
      'Lifetime access'
    ],
    reviews: []
  },
  {
    slug: 'mobile-app-development',
    title: 'MOBILE APP DEVELOPMENT',
    icon: 'bi-phone',
    iconColor: '#20c997',
    category: 'Development',
    level: 'intermediate',
    description: 'Turn your app ideas into reality and design seamless user experiences with our Mobile App Development course.',
    overview: 'Create stunning mobile applications for Android and iOS. Learn React Native for cross-platform development. Build and publish your own mobile apps.',
    duration: '14 weeks',
    price: 180000,
    instructor: {
      name: 'Mrs. Fatima Yusuf',
      title: 'Mobile App Developer',
      bio: 'Fatima is a mobile app developer with published apps on both Play Store and App Store, teaching app development for 7 years.'
    },
    studentsEnrolled: 3123,
    rating: 4.7,
    reviewCount: 412,
    learningOutcomes: [
      'Build native and cross-platform mobile apps',
      'Master React Native framework',
      'Design mobile user interfaces',
      'Integrate APIs and backend services',
      'Publish apps to app stores'
    ],
    prerequisites: ['JavaScript knowledge', 'Basic programming skills'],
    curriculum: [
      {
        id: 'module-1',
        title: 'Mobile Development Basics',
        lessons: [
          { id: 'lesson-1-1', title: 'Introduction to Mobile Development', duration: '20 min', type: 'video', isPreview: true },
          { id: 'lesson-1-2', title: 'Mobile UI/UX Principles', duration: '25 min', type: 'video' },
          { id: 'lesson-1-3', title: 'Development Environment Setup', duration: '30 min', type: 'video' }
        ]
      },
      {
        id: 'module-2',
        title: 'React Native Development',
        lessons: [
          { id: 'lesson-2-1', title: 'React Native Fundamentals', duration: '35 min', type: 'video' },
          { id: 'lesson-2-2', title: 'Components and Navigation', duration: '40 min', type: 'video' },
          { id: 'lesson-2-3', title: 'State Management', duration: '45 min', type: 'video' },
          { id: 'lesson-2-4', title: 'Building Your First App', duration: '90 min', type: 'assignment' }
        ]
      }
    ],
    includes: [
      '50+ hours of video content',
      'App development projects',
      'Publishing guide',
      'Certificate of completion',
      'Lifetime access'
    ],
    reviews: []
  },
  {
    slug: 'mobile-phone-repairs',
    title: 'MOBILE PHONE REPAIRS',
    icon: 'bi-tools',
    iconColor: '#ffc107',
    category: 'Hardware',
    level: 'beginner',
    description: 'Learn the skills to diagnose and fix mobile phone issues, turning your expertise into a profitable venture with our Mobile Phone Repairs course.',
    overview: 'Master the art of mobile phone repair. Learn to diagnose and fix common hardware and software issues. Start your own repair business or work as a technician.',
    duration: '8 weeks',
    price: 110000,
    instructor: {
      name: 'Mr. Peter Obi',
      title: 'Mobile Repair Specialist',
      bio: 'Peter has repaired thousands of devices over 10 years and runs a successful repair business while training new technicians.'
    },
    studentsEnrolled: 2789,
    rating: 4.6,
    reviewCount: 345,
    learningOutcomes: [
      'Diagnose mobile phone problems',
      'Repair common hardware issues',
      'Troubleshoot software problems',
      'Use repair tools and equipment',
      'Start a repair business'
    ],
    prerequisites: ['Basic electronics knowledge helpful but not required'],
    curriculum: [
      {
        id: 'module-1',
        title: 'Mobile Phone Basics',
        lessons: [
          { id: 'lesson-1-1', title: 'Mobile Phone Components', duration: '20 min', type: 'video', isPreview: true },
          { id: 'lesson-1-2', title: 'Tools and Equipment', duration: '25 min', type: 'video' },
          { id: 'lesson-1-3', title: 'Safety Precautions', duration: '15 min', type: 'video' }
        ]
      },
      {
        id: 'module-2',
        title: 'Hardware Repairs',
        lessons: [
          { id: 'lesson-2-1', title: 'Screen Replacement', duration: '30 min', type: 'video' },
          { id: 'lesson-2-2', title: 'Battery Replacement', duration: '25 min', type: 'video' },
          { id: 'lesson-2-3', title: 'Charging Port Repair', duration: '30 min', type: 'video' },
          { id: 'lesson-2-4', title: 'Component Replacement', duration: '35 min', type: 'video' }
        ]
      },
      {
        id: 'module-3',
        title: 'Software Troubleshooting',
        lessons: [
          { id: 'lesson-3-1', title: 'Software Issues Diagnosis', duration: '25 min', type: 'video' },
          { id: 'lesson-3-2', title: 'Flashing and Updates', duration: '30 min', type: 'video' },
          { id: 'lesson-3-3', title: 'Unlocking Devices', duration: '25 min', type: 'video' }
        ]
      }
    ],
    includes: [
      '30+ hours of video content',
      'Repair demonstrations',
      'Business setup guide',
      'Certificate of completion',
      'Lifetime access'
    ],
    reviews: []
  },
  {
    slug: 'web-development',
    title: 'WEB DEVELOPMENT',
    icon: 'bi-globe',
    iconColor: '#007bff',
    category: 'Development',
    level: 'beginner',
    description: 'Craft stunning, user-friendly websites and unleash your creativity in the digital space with our Web Development course.',
    overview: 'Become a professional web developer. Learn HTML, CSS, JavaScript, and modern frameworks. Build responsive websites and web applications from scratch.',
    duration: '16 weeks',
    price: 150000,
    instructor: {
      name: 'Mr. Ahmed Bello',
      title: 'Full Stack Developer',
      bio: 'Ahmed is a full-stack developer with 15 years of experience building web applications and training aspiring developers.'
    },
    studentsEnrolled: 5678,
    rating: 4.9,
    reviewCount: 723,
    learningOutcomes: [
      'Build responsive websites with HTML and CSS',
      'Create interactive features with JavaScript',
      'Use modern frameworks like React',
      'Understand backend development basics',
      'Deploy websites to production'
    ],
    prerequisites: ['Basic computer skills', 'No coding experience required'],
    curriculum: [
      {
        id: 'module-1',
        title: 'HTML and CSS Fundamentals',
        lessons: [
          { id: 'lesson-1-1', title: 'Introduction to Web Development', duration: '20 min', type: 'video', isPreview: true },
          { id: 'lesson-1-2', title: 'HTML Basics', duration: '30 min', type: 'video' },
          { id: 'lesson-1-3', title: 'CSS Styling', duration: '35 min', type: 'video' },
          { id: 'lesson-1-4', title: 'Responsive Design', duration: '40 min', type: 'video' },
          { id: 'lesson-1-5', title: 'Build Your First Website', duration: '60 min', type: 'assignment' }
        ]
      },
      {
        id: 'module-2',
        title: 'JavaScript Programming',
        lessons: [
          { id: 'lesson-2-1', title: 'JavaScript Fundamentals', duration: '30 min', type: 'video' },
          { id: 'lesson-2-2', title: 'DOM Manipulation', duration: '35 min', type: 'video' },
          { id: 'lesson-2-3', title: 'Event Handling', duration: '30 min', type: 'video' },
          { id: 'lesson-2-4', title: 'Interactive Website Project', duration: '90 min', type: 'assignment' }
        ]
      },
      {
        id: 'module-3',
        title: 'Modern Web Development',
        lessons: [
          { id: 'lesson-3-1', title: 'Introduction to React', duration: '40 min', type: 'video' },
          { id: 'lesson-3-2', title: 'Building with React', duration: '50 min', type: 'video' },
          { id: 'lesson-3-3', title: 'Backend Basics with Node.js', duration: '45 min', type: 'video' },
          { id: 'lesson-3-4', title: 'Final Project', duration: '120 min', type: 'assignment' }
        ]
      }
    ],
    includes: [
      '60+ hours of video content',
      'Coding exercises and projects',
      'Portfolio website template',
      'Certificate of completion',
      'Lifetime access'
    ],
    reviews: []
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return courses.map(course => course.slug);
}

export function getCoursesByCategory(category: CourseCategory): Course[] {
  return courses.filter(course => course.category === category);
}

export function getCoursesByLevel(level: CourseLevel): Course[] {
  return courses.filter(course => course.level === level);
}

export function getPopularCourses(limit: number = 6): Course[] {
  return courses
    .sort((a, b) => b.studentsEnrolled - a.studentsEnrolled)
    .slice(0, limit);
}
