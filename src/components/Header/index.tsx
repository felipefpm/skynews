import Link from 'next/link'
import { useRouter } from 'next/router';
import { SingInButton } from '../SingInButton';
import styles from './styles.module.scss';

export function Header() {
  const { asPath } = useRouter()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="images/logo.svg" alt="sky.news" />
        <nav>
          <Link href='/'>
            <a className={asPath === '/' ? styles.active : ''}>Home</a>
          </Link>
          <Link href='/posts'>
            <a className={asPath === '/posts' ? styles.active : ''}>Posts</a>
          </Link>
        </nav>

        <SingInButton />
      </div>
    </header>
  );
}