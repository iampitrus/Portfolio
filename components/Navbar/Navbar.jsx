import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../../styles/Navbar.module.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? styles.backdrop : ''} onClick={() => Close()} />
      <nav
        className={styles.navbar + ' container-x'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.navContainer}>
          <a href='#' className={styles.navLogo}>
            PitaKodz
          </a>
          <ul
            className={
              click ? styles.navMenu + ' ' + styles.active : styles.navMenu
            }
          >
            <li className={styles.navItem}>
              <a href='#' onClick={click ? handleClick : null}>
                Home
              </a>
            </li>
            <li>
              <a href='#about' onClick={click ? handleClick : null}>
                About Me
              </a>
            </li>
            <li>
              <a href='#projects' onClick={click ? handleClick : null}>
                Projects
              </a>
            </li>
            <li>
              <a
                className={styles.contact}
                href='#contact'
                onClick={click ? handleClick : null}
              >
                Contact me
              </a>
            </li>
          </ul>
          <div className={styles.navIcon} onClick={handleClick}>
            <i>{click ? <CloseIcon /> : <MenuIcon />}</i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
