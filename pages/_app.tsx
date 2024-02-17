import "@/styles/globals.css";
import { Provider } from 'react-redux';
import store from '../store/store';
import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from "@/components/layout/layout";
import { theme } from "@/styles/theme";

import { Roboto } from 'next/font/google';
import { Inter } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const inter = Inter({ subsets: ['latin'] })

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <main className={inter.className}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </ThemeProvider>
      </Provider>
    </AppCacheProvider>
  );
}
