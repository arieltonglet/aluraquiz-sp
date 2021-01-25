import Head from "next/head";

import db from "../../../db.json";

const SEO = () => (
  <Head>
    <title>{db.title}</title>
    <meta name="title" content={db.title} />
    <meta name="description" content={db.description} />

    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://aluraquiz-base.arieltonglet.vercel.app/"
    />
    <meta property="og:title" content={db.title} />
    <meta property="og:description" content={db.description} />
    <meta
      property="og:image"
      content="https://aluraquiz-base.arieltonglet.vercel.app/assets/images/d-a-v-i-d-s-o-n-l-u-n-a-Eye_or7LxxQ-unsplash.jpg"
    />

    <meta property="twitter:card" content="summary_large_image" />
    <meta
      property="twitter:url"
      content="https://aluraquiz-base.arieltonglet.vercel.app/"
    />
    <meta property="twitter:title" content={db.title} />
    <meta property="twitter:description" content={db.description} />
    <meta
      property="twitter:image"
      content="https://aluraquiz-base.arieltonglet.vercel.app/assets/images/d-a-v-i-d-s-o-n-l-u-n-a-Eye_or7LxxQ-unsplash.jpg"
    />
  </Head>
);

export default SEO;
