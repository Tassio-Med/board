import React from 'react'
import Link from 'next/link';
import styles from './styles.module.scss';
import SignInButton from '../SignInButton';
import { FaThList } from 'react-icons/fa';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" >
          <FaThList/>
        </Link>
        <nav>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
          <Link href="/board" legacyBehavior>
            <a>Meu board</a>
          </Link>
        </nav>
        <SignInButton/>
      </div>
    </header>
  )
}
