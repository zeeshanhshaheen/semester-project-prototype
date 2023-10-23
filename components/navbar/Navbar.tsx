import React from "react";
import Image from "next/image";
import Link from "next/link";
import nextIcon from "../../public/next.svg";

import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Image src={nextIcon} alt="navbar logo" />
      </div>
      <ul className={styles.navbar_list}>
        <li className={styles.navbar_list_element}>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/createpost">Create Post</Link>
        </li>
        <li>
          <Link href="/feed">Feed</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
