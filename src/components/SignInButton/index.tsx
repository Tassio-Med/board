import React from 'react'
import styles from './styles.module.scss'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export default function SignInButton() {

  const session = true;

  return session ? (
    <div>
      <button
      type='button'
      className={styles.signInButton}
      onClick={()=> {}}
      >
        <img src="https://i.pinimg.com/564x/16/00/69/1600692b07e7950d09b0bad0bb685ac4--kinh-d%E1%BB%8B-homunculus.jpg" alt="Foto de perfil" />
        Olá Tássio
        <FiX color='#737380' className={styles.closeIcon} />
      </button>
    </div>
  ) : (
    <div>
      <button
      type='button'
      className={styles.signInButton}
      onClick={()=> {}}
      >
        <FaGithub color='#ffb800'/>
        Entrar com Github
      </button>
  </div>
  )
}
