import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import Link from 'next/link';



function Home() {

  const [isActive, setActive] = useState(false);

  return (
    <div>
      <Head>
        <title>Home Vivero BH</title>
        <meta name='description' content='Encontre a melhor opção e variedade em plantas para seu lar' />
        <meta name="viewport" content="width=device, initial-scale=1.0, maximum-scale=1.0"></meta>
      </Head>

      <section className={isActive ? styles.showcaseActive : styles.showcase}>
        {/* <section className={styles.showcase}> */}
        <header>
          <h2 className={styles.logo}>Samambaia</h2>
          <div className={isActive ? styles.toggleActive : styles.toggle} onClick={() => setActive(!isActive)}></div>
          {/* <div className={styles.toggle}></div> */}
        </header>

        <video autoPlay loop muted>
          <source src="/videos/video.mp4" />
        </video>
        <div className={styles.overlay}></div>
        <div className={styles.text}>
          <h2>Viviero de mudas</h2>
          <h3>Natureza no seu lar</h3>
          <p>Trabalhamos com uma grande variedade de plantas desde mudas pequenas até plantas adultas de grande porte. Somos produtores por isso temos os melhores preços.</p>
          <a href="#">Saiba mais</a>
        </div>
        <ul className={styles.social}>
          <li><a href="#"><Image src="/img/facebook.png" alt="fb" width={21} height={41} /></a></li>
          <li><a href="#"><Image src="/img/instagram.png" alt="ig" width={41} height={41} /></a></li>
          <li><a href="#"><Image src="/img/twitter.png" alt="tw" width={41} height={33} /></a></li>
        </ul>
      </section>

      <div className={styles.menu}>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/sobre"><a>Sobre</a></Link></li>
          <li><Link href="#"><a>Blog</a></Link></li>
          <li><Link href="#"><a>Contato</a></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Home;

