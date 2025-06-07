

import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Contact Me</h2>
      <p className={styles.contactDescription}>
        下記フォームよりお気軽にご連絡ください！
      </p>

      <form className={styles.contactForm}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
