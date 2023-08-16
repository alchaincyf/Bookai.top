// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const { init } = require('@vercel/analytics');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BookAI.top',
  tagline: '你的第一本AI学习书，带你走向AI未来',
  favicon: 'img/favicon.ico',
  url: 'https://bookai.top',
  baseUrl: '/',
  organizationName: 'Alchain花生',
  projectName: 'BookAI.top',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        anonymizeIP: true,
        trackingIds: ['G-8T0M4Q3Q8W'],
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    scripts: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7522094408813551',
        async: true,
        crossorigin: 'anonymous',
      },
    ],
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BookAI',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'ChatGPT教程',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '教程',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '我开发的AI工具',
          items: [
            {
              label: 'AI阅读助手',
              href: 'https://chrome.google.com/webstore/detail/ai%E9%98%85%E8%AF%BB%E5%8A%A9%E6%89%8B%EF%BD%9C%E8%B1%86%E7%93%A3%E8%AF%BB%E4%B9%A6%EF%BD%9C%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6/mfpmipdckdgjdmaffpehmhckhejkoioa?hl=zh-CN',
            },
            {
              label: 'flomoAI',
              href: 'https://chrome.google.com/webstore/detail/flomoai-copilot-for-flomo/foaikmlomfjcldgoeijicnbemfjinjmo?hl=zh-CN',
            },
            {
              label: 'ChatGPT for Amazon',
              href: 'https://chrome.google.com/webstore/detail/chatgpt-for-amazon/aaionafjdcpmogbbhglkhompliakihaa?hl=zh-CN',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '专栏',
              href: 'https://xiaobot.net/p/AIclass',
            },
            {
              label: '即刻',
              href: 'https://web.okjike.com/u/27BF807A-FA4D-4B01-AAFD-05FAAA674335',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@Alchain',
            },
            {
              label: 'Bilibili',
              href: 'https://space.bilibili.com/14097567',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bookai, Inc. `,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
