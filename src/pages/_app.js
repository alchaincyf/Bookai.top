import { Analytics } from '@vercel/analytics';

function MyApp({ Component, pageProps }) {
  return (
    <Analytics>
      <Component {...pageProps} />
    </Analytics>
  );
}

export default MyApp;
