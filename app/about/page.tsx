// List 2 - app/about/page.tsx

import Image from "next/image";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>About</h2>
      <div className={styles.about}>
        <p className={styles.text}>
        こんにちは、私はチーリ・アウンです。見た目だけでなく、使いやすさにもこだわったウェブサイトを作ることが好きな、創造的で細部に注意を払うウェブ開発者です。デザインとテクノロジーの両方に強い関心があり、アイデアをクリーンで効率的なコードで形にする新しい方法を日々探求しています。また、チームワークも大切にしており、協力しながらより良いものを作り上げることにやりがいを感じています。
      </p>

      <section className={styles.imageSection}>
        <Image
          src="/images/my.jpg"
          alt="About Image"
          width={800}
          height={400}
          className={styles.image}
        />
      </section>
      </div>
    </main>
  );
}
