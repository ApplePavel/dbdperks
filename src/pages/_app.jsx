import Head from 'next/head';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ['latin'],
});

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DBDPerk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
