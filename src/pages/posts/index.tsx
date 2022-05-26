import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Skynews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Titulo do post</strong>
            <p>
              Pequeno paragrafo para se ter uma noção da noticia por completo 
              que a pessoa so terá acesso depois que assinar
            </p>
          </a>

          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Titulo do post</strong>
            <p>
              Pequeno paragrafo para se ter uma noção da noticia por completo 
              que a pessoa so terá acesso depois que assinar
            </p>
          </a>

          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Titulo do post</strong>
            <p>
              Pequeno paragrafo para se ter uma noção da noticia por completo 
              que a pessoa so terá acesso depois que assinar
            </p>
          </a>
        </div>
      </main>
    </>
  );
}