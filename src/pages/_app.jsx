import Head from 'next/head';
import { Roboto } from 'next/font/google';
import '../styles/globals.css';
import { LanguageProvider } from '../components/LanguageProvider'; // Adjust the path if needed


const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DBDPerk</title>
        <link rel="icon" href="/image.png" />
      </Head>
      <LanguageProvider> 
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </LanguageProvider>
    </>
  );
}

export default MyApp;
