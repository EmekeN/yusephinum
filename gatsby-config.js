module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": ""
    }
  }, "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap"]
};