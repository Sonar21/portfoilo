
"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import AboutPage from "./about/page";
import ProfilePage from "./profile/page";
import SkillPage from "./skill/page";
import StrengthsPage from "./strengths/page";
import ContactPage from "./contact/page";
import WorkPage from "./work/page";

export default function HomePage() {
  return (
    <main className={styles.container}>
      {/* Floating Center Navbar */}
      <nav className={styles.floatingNav}>
        <ul>
          <li><Link href="#">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#profile">Profile</Link></li>
          <li><Link href="#work">Work</Link></li>
          <li><Link href="#skill">Skill</Link></li>
          <li><Link href="#strengths">Strengths</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Image */}
      {/* <Image
        src="/images/"
        alt="Main Visual"
        width={1200}
        height={600}
        className={styles.heroImage}
      /> */}
      <section className={styles.heroSection}>
  <Image
    src="/images/main.jpg"
    alt="Main Visual"
    width={1200}
    height={600}
    className={styles.heroImage}
  />
  <div className={styles.heroText}>
    <h1>Portfolio Home</h1>
    <p>Creative Designer & Developer</p>
  </div>
</section>


      {/* Sections */}
      <section id="about"><AboutPage /></section>
      <section id="profile"><ProfilePage /></section>
      <section id="work"><WorkPage /></section>
      <section id="skill"><SkillPage /></section>
      <section id="strengths"><StrengthsPage /></section>
      <section id="contact"><ContactPage /></section>
    </main>
  );
}
