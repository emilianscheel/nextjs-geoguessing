import styles from './Countdown.module.scss';
import { useState, useEffect } from 'react';
import Router from 'next/router';

export default function Countdown({ seconds }) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, seconds * 1000);
  });

  return (
    <div
      className={`${styles.countdown_container} ${
        isLoading ? styles.show : styles.hide
      }`}
    >
      <div className={styles.demo}>
        <div className={styles.demo__colored_blocks}>
          <div className={styles.demo__colored_blocks_rotater}>
            <div className={styles.demo__colored_block}></div>
            <div className={styles.demo__colored_block}></div>
            <div className={styles.demo__colored_block}></div>
          </div>
          <div className={styles.demo__colored_blocks_inner}></div>
          <div className={styles.demo__text}>Ready</div>
        </div>
        <div className={styles.demo__inner}>
          <svg className={styles.demo__numbers} viewBox="0 0 100 100">
            <defs>
              <path
                className={styles.demo__num_path_1}
                d="M40,28 55,22 55,78"
              />
              <path
                className={styles.demo__num_join_1_2}
                d="M55,78 55,83 a17,17 0 1,0 34,0 a20,10 0 0,0 -20,-10"
              />
              <path
                className={styles.demo__num_path_2}
                d="M69,73 l-35,0 l30,-30 a16,16 0 0,0 -22.6,-22.6 l-7,7"
              />
              <path
                className={styles.demo__num_join_2_3}
                d="M28,69 Q25,44 34.4,27.4"
              />
              <path
                className={styles.demo__num_path_3}
                d="M30,20 60,20 40,50 a18,15 0 1,1 -12,19"
              />
            </defs>
            <path
              className={styles.demo__numbers_path}
              d="M-10,20 60,20 40,50 a18,15 0 1,1 -12,19 
               Q25,44 34.4,27.4
               l7,-7 a16,16 0 0,1 22.6,22.6 l-30,30 l35,0 L69,73 
               a20,10 0 0,1 20,10 a17,17 0 0,1 -34,0 L55,83 
               l0,-61 L40,28"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
