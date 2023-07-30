// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const { init } = require('@vercel/analytics')

init('prj_CarlibCfSgIfyAicJkI35jN8tG0N')



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BookAI.top',
  tagline: '你的第一本AI学习书，带你走向AI未来',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://bookai.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: ' BookAI',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: ' ChatGPT教程',
          },
         // {to: '/docs/ChatGPT Prompt-Professionals', label: ' ChatGPT提示词', position: 'left'},
          //{to: '/docs/MidJourney提示词进阶', label: ' MidJourney教程', position: 'left'},
        //  {
         //   href: 'https://github.com/facebook/docusaurus',
          //  label: 'GitHub',
           // position: 'right',
         // },
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
                label: ' ChatGPT for Amazon',
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
    }),
};

//module.exports = config;
module.exports = {
  // ... 其他配置
  themeConfig: {
    // ... 其他配置
    gtag: {
      trackingID: 'prj_CarlibCfSgIfyAicJkI35jN8tG0N',
      anonymizeIP: true,
    },
  },
};

