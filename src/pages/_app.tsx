import Layout from '@/components/layout/AppLayout';
import { persistor, store } from '@/store';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '../../styles/globals.css';

function MyApp({
  Component,
  pageProps: { session, setCurrentUser, ...pageProps },
}: AppProps) {
  return (
    <>
      <Provider store={store}>
        <SessionProvider session={session}>
          <PersistGate persistor={persistor} loading={null}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        </SessionProvider>
      </Provider>
    </>
  );
}

export default MyApp;
