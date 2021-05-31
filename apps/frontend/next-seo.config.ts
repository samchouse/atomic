import { NextSeoProps } from 'next-seo';

const config: NextSeoProps = {
  description: 'Atomic, a chat app for you',
  canonical: 'http://atomic.chat/',
  openGraph: {
    site_name: 'Xenfo',
    title: 'Atomic',
    description: 'Atomic, a chat app for you'
  },
  twitter: {
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [
    {
      property: 'keywords',
      content: 'Xenfo,xenfo'
    },
    {
      property: 'author',
      content: 'Xenfo'
    },
    {
      property: 'theme-color',
      content: '#3182ce'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@400;500;600;700&display=swap'
    },
    {
      rel: 'apple-touch-icon',
      href: '/logos/logo-180x180.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    }
  ]
};

export default config;
