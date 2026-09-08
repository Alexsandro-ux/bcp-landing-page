import { useState } from 'react';
import { BcpLogo } from '../Logo/Logo';
import style from './Header.module.css';

export function Header({ logoRef = '#', links = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={style.headerContainer}>
      <nav className={style.navbarContent}>
        
        <a href={logoRef} className={style.logoLink}>
          <BcpLogo className={style.logo} />
        </a>

        <button 
          className={style.menuToggle} 
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span className={`${style.bar} ${isMenuOpen ? style.barOpen : ''}`}></span>
          <span className={`${style.bar} ${isMenuOpen ? style.barOpen : ''}`}></span>
          <span className={`${style.bar} ${isMenuOpen ? style.barOpen : ''}`}></span>
        </button>

        <ul className={`${style.navList} ${isMenuOpen ? style.navListOpen : ''}`}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.ref} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
}