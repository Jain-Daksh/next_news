
import styles from '../styles/Home.module.css';
import { Navbar } from '../component/navbar'
import Head from 'next/head';
export default function Home() {
  return (
    <div className="page-container">
       <Head>
        <title>Home Page</title>
      </Head>
      <Navbar />

      <div className={styles.main}>
        <h1>Next.js News App</h1>

        <h3>Your one stop for the latest news articles</h3>
      </div>
    </div>
  );
}