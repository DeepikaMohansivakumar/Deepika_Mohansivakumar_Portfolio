import type { Project } from '../types'

// TODO: replace placeholder GitHub / live demo links with your real URLs.
export const projects: Project[] = [
  {
    id: 'tsl-recognition',
    title: 'Tamil Sign Language Recognition System',
    tagline: 'Real-time gesture recognition with spoken output',
    categories: ['Artificial Intelligence', 'Deep Learning', 'Computer Vision'],
    description:
      'An AI-powered system that uses MediaPipe and MobileNetV3 to recognize Tamil hand gestures in real time, then converts the recognized signs into speech using Google Text-to-Speech — improving communication accessibility.',
    tech: [
      'Python',
      'TensorFlow',
      'OpenCV',
      'MediaPipe',
      'MobileNetV3',
      'MLP',
      'NumPy',
      'Scikit-learn',
      'Google Text-to-Speech',
    ],
    features: [
      'Real-time hand detection',
      'Gesture recognition',
      'Speech generation',
      'AI-based classification',
      'High accuracy',
    ],
    github: 'https://github.com/DeepikaMohansivakumar', // TODO: add real repo link
    liveDemo: undefined, // no live demo yet
  },
  {
    id: 'virtual-mandi',
    title: 'Virtual Mandi',
    tagline: 'Smart digital marketplace for agricultural products',
    categories: ['Full Stack Development'],
    description:
      'Traditional agricultural markets depend heavily on middlemen, reducing farmer profits, while buyers lack transparent pricing. Virtual Mandi is a web platform that connects farmers directly with buyers — with online product listings, transparent pricing, live weather information, and simplified product management.',
    tech: [
      'React.js',
      'HTML',
      'CSS',
      'JavaScript',
      'Flask',
      'MongoDB',
      'Cloudinary',
      'OpenWeather API',
      'Agricultural Market Price API',
      'Vercel',
      'Render',
    ],
    details: [
      {
        label: 'Farmer Module',
        items: ['Registration & login', 'Add / edit products', 'Update quantity', 'Manage orders'],
      },
      {
        label: 'Buyer Module',
        items: ['Registration & login', 'Search products', 'Shopping cart', 'Place orders'],
      },
      {
        label: 'Admin Module',
        items: ['Dashboard', 'Monitor listings', 'Manage users', 'Platform maintenance'],
      },
      {
        label: 'My Contribution',
        items: ['Frontend development', 'UI implementation', 'Dashboard design', 'Product listing pages', 'Testing & debugging'],
      },
      {
        label: 'Future Enhancements',
        items: ['ONDC integration', 'Online payments', 'Logistics tracking', 'Android app', 'Multilingual support'],
      },
    ],
    github: 'https://github.com/DeepikaMohansivakumar', // TODO: add real repo link
    liveDemo: undefined,
  },
]
