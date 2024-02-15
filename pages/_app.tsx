import "@/styles/globals.css";
import { Provider } from 'react-redux';
import store from '../store/store';
import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import Layout from "@/components/layout/layout";
import { theme } from "@/styles/theme";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const themeOld = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </AppCacheProvider>
  );
}
