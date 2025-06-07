"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Navbar() {
  return (
     <div className={styles.hero}>
        
        
        <h1 className={styles.title}>My Portfolio</h1>
     

      {/* 各セクションへのリンク */}
      <nav className={styles.navLinks}>
        <ul className="">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/skill">Skill</Link>
          </li>
          <li>
            <Link href="/strengths">Strengths</Link>
          </li>
          <li>
            <Link href="/contact">Contant</Link>
          </li>
        </ul>
      </nav>
      
      </div>
  );
}
