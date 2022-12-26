import type { AppProps } from 'next/app';
import "../styles/all.scss"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
