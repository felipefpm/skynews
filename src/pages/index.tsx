import { GetServerSideProps } from 'next'

import Head from 'next/head'
import { stripe } from '../services/stripe';

import styles from '../styles/stylesPages/home.module.scss'
import { SubscribButton } from './../components/SubcribeButton/index';

interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month </span>
          </p>

          <SubscribButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl code" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1KTDwsCix9CEXEOE8XJMnx8K')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',

    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product
    }
  }
}
