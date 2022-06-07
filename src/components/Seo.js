import React from "react";
import { Helmet } from "react-helmet";

function Seo({ description, lang, meta, title, imageUrl, url }) {
  const metaDescription =
    description ||
    "Start your own grocery delivery business. Browse personal shoppers near you to have your groceries delivered.";
  const defaultTitle = "Dumpling";
  const image =
    imageUrl || "https://ddrppvc0wiygy.cloudfront.net/images/content/shared/dumpling-social.png";
  const author = "yusephinim.com";
  const canonicalUrl = url || "https://dumpling.us";

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s - ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: image,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: image,
        },
        {
          name: `og:image:alt`,
          content: process.env,
        },
      ].concat(meta)}
    >
      <link rel="icon" href="https://ddrppvc0wiygy.cloudfront.net/images/logos/fav-icon.png" />

      <meta name="title" content={`${title} - Dumpling`} />
      <meta property="og:title" content={`${title} - Dumpling`} />
      <meta name="description" content={metaDescription} />
      <meta property="og:description" content={metaDescription} />
      <meta property="image" content={image} />
      <meta property="og:image" content={image} />
      {/* <meta property="og:image:alt" content={process.env.URL} /> */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="yusephinim.com" />
      <meta property="og:type" content=" website" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="yusephinim.com" />
      <meta propterty="twitter:url" content={canonicalUrl} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={metaDescription} />
    </Helmet>
  );
}
export default Seo;
