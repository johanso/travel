"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './navbar.module.scss'
import { IconClose, IconMenu } from '../icons'
import { NAVIGATION_LINKS } from '@/constants'
import Button from '../button'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)
  const [scrollNav, setscrollNav] = useState<Boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 10) {
        setscrollNav(false)
      } else {
        setscrollNav(true)
      }
    });
    return () => window.removeEventListener('scroll', () => {})
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrollNav ? styles.navbar__scrolled : 'no'}`}>
      <div className={`${styles.navbar__container} container`}>
        <div className={styles.navbar__logo}>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={32}
              priority
            />
          </Link>
        </div>
        <ul className={`${styles.navbar__ul} ${isMenuOpen ? styles.navbar__ul_mobile : ''}`}>
          {
            NAVIGATION_LINKS.map((link) => (
              <li key={link.key} className={styles.navbar__li}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))
          }           
          <li className={styles.navbar__button}>
            <Button color="primary" text="Login" icon={'/person.svg'} />
          </li>
        </ul>
        <div 
          className={styles.navbar__menu_icon} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
            { isMenuOpen ? <IconClose size={20} /> : <IconMenu size={24} /> }
        </div>
      </div>
    </nav>
  )
}

export default Navbar