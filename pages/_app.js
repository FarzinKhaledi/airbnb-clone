import '../styles/global.css';
import 'tailwindcss/tailwind.css';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';

const progress = new ProgressBar({
  size: 7,
  color: '#FE595E',
  className: 'z-50',
  delay: 200,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
