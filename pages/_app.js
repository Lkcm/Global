import '../styles/global.css'
import { ThemeProvider } from "next-themes";
import Head from 'next/head';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Lucas Kroger - Homepage</title>
    </Head>
    <ThemeProvider enableSystem={false} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

export default MyApp;