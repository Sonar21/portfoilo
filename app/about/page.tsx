// List 2 - app/about/page.tsx

import Image from "next/image";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.text}>
        このサイトは「教科書を振り返りながら、自分のポートフォリオを作成する」ことを
        目的としたサンプルプロジェクトです。教科書で学んだ Next.js の基本や CSS
        モジュールの使い方を確認しながら、自分だけのオリジナルサイトを作りましょう。
      </p>

      <section className={styles.imageSection}>
        <Image
          src="/images/profile.jpg"
          alt="About Image"
          width={800}
          height={400}
          className={styles.image}
        />
      </section>
    </main>
  );
}
