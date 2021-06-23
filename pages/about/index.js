import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import HeadCommon from '../../components/HeadCommon';

export default function About() {
  return (
    <>
    <HeadCommon pageTitle="Next.js Demo About" />
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Genius <a href="https://geniuskouta.com">Kouta</a>
        </h1>
        <Link href="/">
          <a>Back to home</a>
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
