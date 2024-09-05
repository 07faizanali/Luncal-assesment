import Head from 'next/head';
import TabSection from '../components/TabSection';
import GallerySection from '../components/GallerySection';
import styles from '../styles/Home.module.css';

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sample Page</title>
        <meta name="description" content="Sample layout with Next.js and CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Left Side: Empty Space */}
        <div className={styles.leftSide}></div>
        
        {/* Right Side: Main Content */}
        <div className={styles.rightSide}>
          <TabSection />
          <GallerySection />
        </div>
      </main>
    </div>
  );
}
