import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isGifVisible, setIsGifVisible] = useState(false);

  const handleClick = () => {
    const audio = new Audio('/sound.mp3');
    audio.play();
    setIsGifVisible(true);
  };

  return (
    <div>
      <Head>
        <title>Hi Casi!!!</title>
      </Head>
      <div className={styles.relaxingGradient}>
        <img
          src="/cat.jpg"
          alt="Cat"
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        />
        {isGifVisible && <img src="/cat.gif" alt="Cat gif" />}
      </div>
    </div>
  );
}
