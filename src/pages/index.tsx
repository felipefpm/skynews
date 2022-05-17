import Head from 'next/head'

import styles from '../styles/stylesPages/home.module.scss'
import { SubscribButton } from './../components/SubcribeButton/index';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | sky.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News abaut the <span>React</span> world.</h1>
          <p>
            Get access to all the publication <br />
            <span>for $9.90 month </span>
          </p>

          <SubscribButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl code" />
      </main>
    </>
  )
}
