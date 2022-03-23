import Head from 'next/head';

export default function Layout({ children }) {
  return;

  <div className="app">
    <Head>
      <link
        href="https://unpkg.com/mapillary-js@4.1.0/dist/mapillary.css"
        rel="stylesheet"
      />
    </Head>
    {children}
  </div>;
}
