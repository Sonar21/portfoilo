// List 2 - app/about/page.tsx

import Image from "next/image";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>About</h2>
      <div className={styles.about}>
        <p className={styles.text}>
          私はティリアウンです。ミャンマーで生まれ、子どもの頃に日本にやってきました。異国の地での生活は簡単ではありませんでしたが、小さな頃からの夢を胸に、ここまで努力を重ねてきました。
          私の夢は、人の心に届くようなウェブサイトを作ることです。見た目の美しさはもちろん、誰にとっても使いやすく、心地よい体験を届けられるように心がけています。私は、デザインとテクノロジーのどちらにも強い興味を持っており、毎日、新しいアイデアをコードで形にすることに挑戦しています。
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
