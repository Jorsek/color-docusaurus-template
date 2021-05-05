module.exports = {
  title: "Docusaurus",
  tagline: "Docusaurus Webhelp",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "jorsek", // Usually your GitHub org/user name.
  projectName: "color-docusaurus-template", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Docusaurus",
      logo: {
        alt: " Logo",
        src: "img/logo.svg",
      },
    },
    hideableSidebar: true, // Remove to hide the left pane
    //sidebarCollapsible: false, // Remove to disable the left-pane collapse/expand button
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()}.`,
    },
    // The following determines the dark/light mode switch styling
    colorMode: {
      respectPrefersColorScheme: true,
      switchConfig: {
        lightIcon: "\u{25CB}",
        darkIcon: "\u{25CF}",
        darkIconStyle: {
          color: `#f4f4f4`,
        },
        lightIconStyle: {
          color: `#f4f4f4`,
        },
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: false,
        pages: false,
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "./docs",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
