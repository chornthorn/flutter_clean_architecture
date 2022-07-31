// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flutter Clean Architecture',
  tagline: 'A Clean way, manageable and scalable to build Flutter apps.',
  url: 'https://chornthorn.github.io',
  baseUrl: '/flutter_clean_architecture/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'chornthorn',
  projectName: 'flutter_clean_architecture',
  trailingSlash: false,

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
          sidebarCollapsible: true,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/chornthorn/dart_tutorial/tree/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        //        googleAnalytics: {
        //          trackingID: 'G-EW29D9XQYX',
        //          anonymizeIP: true,
        //        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/logo.png',
      metaImage: '/img/logo.png',

      announcementBar: {
        id: 'experimental',
        content:
          '🚧 This is an experimental docs. It might be change every time. 🚧 ',
        backgroundColor: '#f9f871',
        textColor: '#000000',
        isCloseable: false,
      },
      navbar: {
        title: 'Flutter Clean Architecture',
        hideOnScroll: true,
        logo: {
          alt: 'Flutter Clean Architecture Logo',
          src: 'img/logo.svg',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/chornthorn/flutter_clean_architecture',
            position: 'right',
            className: 'navbar-github-icon',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/docs/overview',
              },
              {
                label: 'Basics',
                to: '/docs/overview',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Blog Post',
                href: '#',
              },
              {
                label: 'Official Docs',
                href: 'https://dart.dev/guides',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Open an Issue',
                href: 'https://github.com/chornthorn/flutter_clean_architecture/issues/new/choose',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/chornthorn/flutter_clean_architecture',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chorn Thorn.<br/>Built with 💙 by <a target="_blank" rel="noopener noreferrer" aria-label="Very Good Ventures" href="https://github.com/chornthorn">Docusaurus</a>.`,
      },
      prism: {
        additionalLanguages: ['dart'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
