module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yusephinum.com`,
    title: "Yusephinim",
    description:
      "An episodic worldbuilding experience told through interdisciplinary installations that explore the complexity of existence and finding a place to call home.",
  },
  polyfill: false,

  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: "GTM-KMFD2NQ",
    //     includeInDevelopment: false,
    //     enableWebVitalsTracking: true,
    //     defaultDataLayer: {},
    //   },
    // },
    `gatsby-plugin-minify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("autoprefixer")({ grid: "autoplace" })],
      },
    },
    `gatsby-plugin-compression-v2`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve("./src/components/Common"),
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: [],
      },
    },
  ],
};
