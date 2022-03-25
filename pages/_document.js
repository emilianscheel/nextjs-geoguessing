import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://unpkg.com/mapillary-js@4.1.0/dist/mapillary.css"
          rel="stylesheet"
        />
        <title>GeoGuessr</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
