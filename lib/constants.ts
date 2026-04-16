// ⚠️ TEMP DATA — replace with verified content from founder before launch

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'For Colleges', href: '/for-colleges' },
  { label: 'For Corporates', href: '/for-corporates' },
  { label: 'Contact', href: '/contact' },
]

export const PROGRAMS = [
  {
    id: 'aptitude',
    title: 'Aptitude Training',
    description: 'Problem-solving and logical reasoning for competitive hiring',
    icon: 'brain',
  },
  {
    id: 'technical',
    title: 'Technical Training',
    description: 'Coding, DSA, algorithms, domain-specific skills',
    icon: 'code',
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills Development',
    description: 'Communication, teamwork, leadership for career success',
    icon: 'users',
  },
  {
    id: 'verbal',
    title: 'Verbal Communication',
    description: 'Confidence in interviews and professional environments',
    icon: 'microphone',
  },
  {
    id: 'firestarter',
    title: 'FireStarter Workshops',
    description: 'Practical, hands-on, real-world scenario workshops',
    icon: 'fire',
  },
  {
    id: 'prepsprint',
    title: 'PrepSprint',
    description: 'Intensive mock interviews. Real feedback. Real preparation.',
    icon: 'rocket',
  },
]

// ⚠️ TEMP — confirm real numbers with founder
export const STATS = [
  { value: 500, suffix: '+', label: 'Students Trained' },
  { value: 15, suffix: '+', label: 'Partner Companies' },
  { value: 10, suffix: '+', label: 'College Collaborations' },
  { value: 85, suffix: '%', label: 'Placement Rate' },
]

// ⚠️ TEMP — collect real testimonials (min 4) from founder
export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'BLC completely changed how I approached interviews. I went from zero callbacks to three offers in a month.',
    name: 'Rahul Sharma',
    role: 'Software Engineer',
    company: 'Wipro',
    avatar: '/avatars/placeholder.jpg',
  },
  {
    id: 2,
    quote:
      "The structured curriculum and mock interviews gave our students a real edge. Best campus program we've had.",
    name: 'Dr. Priya Nair',
    role: 'T&P Officer',
    company: 'Amrita Institute',
    avatar: '/avatars/placeholder.jpg',
  },
  {
    id: 3,
    quote:
      "Vishal's approach is different — he doesn't just teach, he makes you think like an industry professional.",
    name: 'Karan Mehta',
    role: 'Backend Developer',
    company: 'Accenture',
    avatar: '/avatars/placeholder.jpg',
  },
]

// ⚠️ TEMP — replace placeholder divs with real SVG logos when received from founder
export const COMPANY_LOGOS = [
  { name: 'IBM', src: '/logos/ibm.svg' },
  { name: 'Capgemini', src: '/logos/capgemini.svg' },
  { name: 'Accenture', src: '/logos/accenture.svg' },
  { name: 'Wipro', src: '/logos/wipro.svg' },
  { name: 'Hexaware', src: '/logos/hexaware.svg' },
  { name: 'Intel', src: '/logos/intel.svg' },
]

export const COLLEGE_LOGOS = [
  { name: 'Amrita', src: '/logos/amrita.svg' },
  { name: 'CMR', src: '/logos/cmr.svg' },
  { name: 'Canara', src: '/logos/canara.svg' },
  { name: 'Alvas', src: '/logos/alvas.svg' },
]

export const CONTACT = {
  phone: '+91 8722077934',
  email: 'info@blcompiler.com', // ⚠️ TEMP — confirm real email
  address: 'Bangalore, Karnataka, India', // ⚠️ TEMP — confirm full address
}

export const SKILL_TREE = [
  {
    year: 'Year 1',
    phase: 'Foundation',
    description: 'Core aptitude, logical reasoning, and communication basics',
    color: '#8BB9F7',
  },
  {
    year: 'Year 2',
    phase: 'Growth',
    description: 'Technical depth: DSA, domain skills, soft skills development',
    color: '#1E328B',
  },
  {
    year: 'Year 3',
    phase: 'Specialization',
    description: 'Industry-specific tracks, workshops, leadership training',
    color: '#FEBB39',
  },
  {
    year: 'Year 4',
    phase: 'Launch',
    description: 'Mock interviews, placement strategy, offer negotiation',
    color: '#0D1B5E',
  },
]
