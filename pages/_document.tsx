import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hello, I'm Edin Kahvedžić - Web &amp; mobile developer from Bosnia and Herzegovina."
        />
        <meta
          name="keywords"
          content="edin, kahvedzic, kahvedžić, web developer, mobile developer, bosnia, bih, visoko"
        />
        <meta property="og:url" content="https://edinkahvedzic.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Edin Kahvedžić - Web & mobile developer"
        />
        <meta
          property="og:description"
          content="Hello, I'm Edin Kahvedžić - Web &amp; mobile developer from Bosnia and Herzegovina."
        />
        <meta property="og:image" content="/meta-image.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="edinkahvedzic.com" />
        <meta property="twitter:url" content="https://edinkahvedzic.com" />
        <meta
          name="twitter:title"
          content="Edin Kahvedžić - Web & mobile developer"
        />
        <meta
          name="twitter:description"
          content="Hello, I'm Edin Kahvedžić - Web &amp; mobile developer from Bosnia and Herzegovina."
        />
        <meta name="twitter:image" content="./meta-image.jpeg" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&amp;display=swap"
          rel="stylesheet"
        />
        <title>Edin Kahvedžić - Web & mobile developer!</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
