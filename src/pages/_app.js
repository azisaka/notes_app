import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '@/styles/globals.css'

import { SessionProvider, signIn } from 'next-auth/react';
import Head from 'next/head'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
    return (
      <SessionProvider session={session}>
        <Head>
          <title>Notes</title>
        </Head>

        <div className="container">
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    )
}
