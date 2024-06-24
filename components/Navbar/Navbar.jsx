import { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../../styles/Navbar.module.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? styles.backdrop : ""} onClick={() => Close()} />
      <nav
        className={styles.navbar + " container-x"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.navContainer}>
          <Link href="/">
            <a className={styles.navLogo}>PitaKodz</a>
          </Link>
          <ul
            className={
              click ? styles.navMenu + " " + styles.active : styles.navMenu
            }
          >
            <li className={styles.navItem}>
              <Link href="/" onClick={click ? handleClick : null}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={click ? handleClick : null}>
                About Me
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={click ? handleClick : null}>
                Projects
              </Link>
            </li>
            <li className={styles.contact}>
              <Link href="/#contact" onClick={click ? handleClick : null}>
                Contact me
              </Link>
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
