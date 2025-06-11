// List 1 - app/page.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import AboutPage from "./about/page";
import ProfilePage from "./profile/page";
import SkillPage from "./skill/page";
import StrengthsPage from "./strengths/page";
import ContactPage from "./contact/page";
import WorkPage from "./work/page";

export default function HomePage() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className={styles.container}>
      <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
        <ul className={styles.navList}>
          {["about", "profile", "work", "skill", "strengths", "contact"].map(
            (slug) => (
              <li key={slug}>
                <Link href={`/${slug}`} className={styles.navLink}>
                  {slug.charAt(0).toUpperCase() + slug.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* <nav className={styles.navLinks}>
        <ul >
          <li>
            <Link  href="/about">About</Link>
          </li>
          <li>
            <Link  href="/profile">Profile</Link>
          </li>
          <li>
            <Link  href="/work">Work</Link>
          </li>
          <li>
            <Link  href="/skill">Skill</Link>
          </li>
          <li>
            <Link  href="/strengths">Strengths</Link>
          </li>
          <li>
            <Link  href="/contact">Contant</Link>
          </li>
        </ul>
      </nav>
       */}

      <Image
        src="/images/"
        alt="Main Visual"
        width={1200}
        height={600}
        className={styles.heroImage}
      />
      <AboutPage />
      <ProfilePage />
      <WorkPage/>
      <SkillPage />
      <StrengthsPage />
      <ContactPage />
    </main>
  );
}
