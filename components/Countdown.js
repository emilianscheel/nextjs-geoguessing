import styles from './Countdown.module.scss';
import { useState, useEffect } from 'react';
import Router from 'next/router';

export default function Countdown() {
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      console.log('start');
      SetLoading(true);
    });

    Router.events.on('routeChangeComplete', (url) => {
      console.log('end');
      SetLoading(false);
    });
  }, []);

  return <div></div>;
}
