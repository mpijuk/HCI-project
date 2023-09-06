import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>M&P Restaurant</title>
        <meta name="description" content="Delicious and homemade meals in Split" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
