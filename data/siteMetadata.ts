export const siteMetadata = {
  title: 'Andrianina Rabakoson – Machine Learning',
  description: 'Personal portfolio website and blog',
  author: {
    name: 'Andrianina Rabakoson',
    headLine: 'Machine learning, software',
    zingFactor: 'I like applied maths with a bit of tech.',
    image: '/avatar.jpg'
  },
  social: {
    github: 'https://github.com/rbaks',
    linkedin: 'https://www.linkedin.com/in/arabakoson/?locale=en_US',
    huggingface: 'https://huggingface.co/rbaks'
  },
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://andr.is-a.dev/me',
  siteRepo: 'https://github.com/rbaks/me',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/banner.png',
  email: 'a.rabakoson@pm.me',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: '' // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown'
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: ''
    }
  }
};
