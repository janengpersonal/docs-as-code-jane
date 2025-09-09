import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jane Thao Nguyen",
  tagline: 'Technical Writer - Content Designer',
  favicon: 'img/favicon-jane.png',

  future: { v4: true },

  url: 'https://janengpersonal.github.io',
  baseUrl: '/docs-as-code-jane/',

  organizationName: 'janengpersonal',
  projectName: 'docs-as-code-jane',
  deploymentBranch: 'gh-pages',

  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Disable default docs/blog presets, use custom docs plugins
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'how-to',
        path: 'how-to',
        routeBasePath: 'how-to',
        sidebarPath: './sidebars.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial',
        path: 'tutorial',
        routeBasePath: 'tutorial',
        sidebarPath: './sidebars.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'explanation',
        path: 'explanation',
        routeBasePath: 'explanation',
        sidebarPath: './sidebars.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'reference',
        path: 'reference',
        routeBasePath: 'reference',
        sidebarPath: './sidebars.js',
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Jane's Documentation",
      logo: {
        alt: "Jane's Logo",
        src: 'img/favicon-jane.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'howToSidebar',
          docsPluginId: 'how-to',
          label: 'How-to',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          docsPluginId: 'tutorial',
          label: 'Tutorial',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'explanationSidebar',
          docsPluginId: 'explanation',
          label: 'Explanation',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'referenceSidebar',
          docsPluginId: 'reference',
          label: 'Reference',
          position: 'left',
        },
        {
          href: 'https://github.com/janengpersonal',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/janethaonguyen22/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Jane's Writing Portfolio. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;

