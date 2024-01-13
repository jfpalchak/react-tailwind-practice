import { CpuChipIcon, LifebuoyIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { 
  CloudArrowUpIcon, 
  CircleStackIcon, 
  PaperAirplaneIcon, 
  ServerIcon 
} from "@heroicons/react/24/solid";

export const footerLinkList = [
  {
    title: 'Solutions',
    links: [
      { text: 'Marketing', href: '#footer'},
      { text: 'Analytics', href: '#footer'},
      { text: 'Commerce', href: '#footer'},
      { text: 'Data', href: '#footer'},
      { text: 'Cloud', href: '#footer'},
    ]
  },
  {
    title: 'Support',
    links: [
      { text: 'Pricing', href: '#footer'},
      { text: 'Documentation', href: '#footer'},
      { text: 'Guides', href: '#footer'},
      { text: 'API Status', href: '#footer'},
    ]
  },
  {
    title: 'Company',
    links: [
      { text: 'About', href: '#footer'},
      { text: 'Press', href: '#footer'},
      { text: 'Blog', href: '#footer'},
      { text: 'Careers', href: '#footer'},
      { text: 'Partners', href: '#footer'},
    ]
  },
  {
    title: 'Legal',
    links: [
      { text: 'Privacy', href: '#footer'},
      { text: 'Terms', href: '#footer'},
      { text: 'Policy', href: '#footer'},
      { text: 'Careers', href: '#footer'},
      { text: 'Partners', href: '#footer'},
    ]
  },
];

export const supportData = [
  {
    title: 'Sales',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, adipisci.',
    Icon: PhoneIcon
  },
  {
    title: 'Technical Support',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, adipisci.',
    Icon: LifebuoyIcon
  },
  {
    title: 'Media Inquiries',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, adipisci.',
    Icon: CpuChipIcon
  }
];

export const services = [
  {
    service: 'App Security',
    Icon: CloudArrowUpIcon
  },
  {
    service: 'Database Design',
    Icon: CircleStackIcon
  },
  {
    service: 'Cloud Data',
    Icon: ServerIcon
  },
  {
    service: 'API',
    Icon: PaperAirplaneIcon
  },
];

export const navLinks = [
  {
    text: 'Home',
    href: 'home'
  },
  {
    text: 'About',
    href: 'about'
  },
  {
    text: 'Support',
    href: 'support'
  },
  {
    text: 'Platforms',
    href: 'platforms'
  },
  {
    text: 'Pricing',
    href: 'pricing'
  },
];