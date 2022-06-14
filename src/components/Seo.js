import FavIcon from "./../images/logos/yusephinum-compass-black.svg";
import CompassLogo from "./../images/logos/yusephinum-compass-white-logo.svg";
import React from "react";
import { Helmet } from "react-helmet";

function Seo({ description, lang, meta, title, imageUrl, url }) {
  const metaDescription =
    description ||
    "An episodic worldbuilding experience told through interdisciplinary installations that explore the complexity of existence and finding a place to call home.";
  const defaultTitle = "Yusephinum";
  const image = imageUrl || "https://drive.google.com/uc?id=1QOR6TLN0Wh-MS5FFG9ElLzjPjW5hKRe-";
  const author = "yusephinum.com";
  const canonicalUrl = url || "https://yusephinum.com";

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
      <link rel="icon" href={FavIcon} />

      <meta name="title" content={`${title} - Yusephinum`} />
      <meta property="og:title" content={`${title} - Yusephinum`} />
      <meta name="description" content={metaDescription} />
      <meta property="og:description" content={metaDescription} />
      <meta property="image" content={image} />
      <meta property="og:image" content={image} />
      {/* <meta property="og:image:alt" content={process.env.URL} /> */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="yusephinum.com" />
      <meta property="og:type" content=" website" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="yusephinum.com" />
      <meta propterty="twitter:url" content={canonicalUrl} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={metaDescription} />
    </Helmet>
  );
}
export default Seo;
