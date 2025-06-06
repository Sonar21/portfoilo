// List 1 - app/page.tsx

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.container}>
      {/* メインビジュアル */}
      <section className={styles.hero}>
        <Image
          src="/images/main-visual.jpg"
          alt="Main Visual"
          width={1200}
          height={600}
          className={styles.heroImage}
        />
        <h1 className={styles.title}>My Portfolio</h1>
      </section>

      {/* 各セクションへのリンク */}
      <nav className={styles.navLinks}>
        <ul>
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
    </main>
  );
}
