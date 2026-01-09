// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CAMMRA AI Manual',
  tagline: 'User Manual and Integration Guide',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ffgroup-usa.github.io',
  baseUrl: '/manuals/',

  organizationName: 'ffgroup-usa',
  projectName: 'manuals',

  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',

          // Optional (recommended): make docs the homepage
          // so https://ffgroup-usa.github.io/manuals/ opens the manual directly.
          routeBasePath: '/',

          // Optional: show "Edit this page" links (set to your repo)
          // If you don't want edit links, delete these two lines.
          editUrl: 'https://github.com/ffgroup-usa/manuals/tree/main/',
          editCurrentVersion: true,
        },

        // Remove all blog features
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'CAMMRA AI Manual',
      logo: {
        alt: 'FF Group',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manual',
          position: 'left',
          label: 'Manual',
        },
        {
          href: 'https://github.com/ffgroup-usa/manuals',
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
              label: 'Manual',
              to: '/', // routeBasePath = '/' makes docs homepage
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ffgroup-usa/manuals',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FF Group.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
