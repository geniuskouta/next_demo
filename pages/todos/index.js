import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import HeadCommon from '../../components/HeadCommon';
import axios from 'axios';

export default function ToDos({ toDos }) {
  return (
    <>
    <HeadCommon pageTitle="Next.js Demo To Dos" />
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Genius <a href="https://geniuskouta.com">Kouta</a>
        </h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
        <ul>
            {
                toDos.map((item, index) => {
                    return <li key={index}>{item.title}</li>
                })
            }
        </ul>


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

export async function getStaticProps() {
    /* fetch data in build time */
    const url = 'https://jsonplaceholder.typicode.com/users/1/todos';
    const toDos = await axios.get(url).then(response => {
        return response.data;
    });

    return {
        props: {
            toDos
        }
    }
}