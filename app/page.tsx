// List 1 - app/page.tsx

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import AboutPage from "./about/page";


export default function HomePage() {
  return (
    <main className={styles.container}>
      {/* メインビジュアル */}
      <div className={styles.hero}>
        
        
        <h1 className={styles.title}>My Portfolio</h1>
     

      {/* 各セクションへのリンク */}
      <nav className={styles.navLinks}>
        <ul className="">
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
        </ul>
      </nav>
      </div>
      <Image
          src="/images/shuri.jpg"
          alt="Main Visual"
          width={1200}
          height={600}
          className={styles.heroImage}
        />
        <AboutPage/>
        
    </main>
  );
}
