// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kolloqe',
  tagline: 'Build and Maintain Codeless, Explainable conversational AIs ⚡',
  url: 'https://kolloqe.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  staticDirectories: ['public', 'static'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kolloqe', // Usually your GitHub org/user name.
  projectName: 'kolloqe.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'main',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // // Please change this to your repo.
          // // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/kolloqe/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // // Please change this to your repo.
          // // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/kolloqe/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'Kolloqe',
        logo: {
          alt: 'Kolloqe Logo',
          src: 'img/kolloqe_steel.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docsVersionDropdown'
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'},
          {
            href: 'https://github.com/kolloqe',
            label: 'GitHub',
            position: 'right',
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
                label: 'Kolloqe Docs',
                to: '/docs/intro',
              },
              {
                label: 'Developer Docs',
                to: '/docs/developer-docs/intro',
              },
            ],
          },
          {
            title: 'Projects',
            items: [
              {
                label: 'GitHub Organization',
                href: 'https://www.github.com/kolloqe',
              },
              {
                label: 'React Widget',
                href: 'https://www.github.com/kolloqe/react-widget-socketio-en',
              },
              {
                label: 'React Input',
                href: 'https://www.github.com/kolloqe/react-kbi-si-en',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kolloqe',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kolloqe. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
