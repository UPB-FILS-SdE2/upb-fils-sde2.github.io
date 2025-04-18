import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Systèmes d\'exploitation 2',
  tagline: 'Comment les logiciels et les ordinateurs interagissent',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://upb-fils-sde2.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'UPB-FILS-SdE2', // Usually your GitHub org/user name.
  projectName: 'upb-fils-sde2.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
              label: '2025',
              // path: '1.0.0',
            },
          },
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/UPB-FILS-SdE2/upb-fils-sde2.github.io/edit/main',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/sde2_social_card.png',
    navbar: {
      title: 'Systèmes d\'exploitation 2',
      logo: {
        alt: 'Systèmes d\'exploitation 2',
        src: 'img/logo.png',
      },
      items: [
        {to: '/docs/category/cours', label: 'Cours', position: 'left'},
        {to: '/docs/category/tp', label: 'TP', position: 'left'},
        {to: '/docs/category/devoir', label: 'Devoir', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: "right"
        },
        {
          href: 'https://github.com/UPB-FILS-SdE2/upb-fils-sde2.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Matériaux',
          items: [
            {
              label: 'Cours',
              to: '/docs/category/cours',
            },
            {
              label: 'TP',
              to: '/docs/category/tp',
            },
            {
              label: 'Devoir',
              to: '/docs/category/devoir',
            },
          ],
        },
        {
          title: 'Extra Bibliograhie',
          items: [
            {
              label: 'Le langage de programmation Rust',
              href: 'https://jimskapt.github.io/rust-book-fr/#le-langage-de-programmation-rust',
            },
            {
              label: 'Écrire un système d\'exploitation dans Rust',
              href: 'https://os.phil-opp.com/fr/',
            },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
        {
          title: 'En Plus',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/upb-fils-sde2',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Politehnica Bucharest.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
