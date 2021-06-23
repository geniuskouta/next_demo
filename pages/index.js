import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeadCommon from '../components/HeadCommon';
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <HeadCommon pageTitle="Next.js Demo Home" />
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Genius <a href="https://geniuskouta.com">Kouta</a>
        </h1>
        <Link href="/about">
          <a>Go to about</a>
        </Link>
        <Link href="/todos">
          <a>To dos</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://geniuskouta.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </>
  )
}
