import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import SEO from '../../next-seo.config';
import '../styles/tailwind.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Atomic - A chat app for you</title>
      </Head>
      <ThemeProvider defaultTheme="dark" attribute="class" enableSystem={false}>
        <div className="app">
          <main>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
