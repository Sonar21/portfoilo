import Image from "next/image";
import styles from "./page.module.css";

export default function ProfilePage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Profile</h2>
      <section className={styles.profileSection}>
        <Image
          src="/images/my.jpg"
          alt="My Profile"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.profileText}>
          <p><strong>名前：</strong>ティリアウン</p>
          <p><strong>年齢：</strong>21歳</p>
          <p>
            専門学校沖縄ビジネス外語学院 Web プログラミングコースを専攻し、現在はエンジニアを目指して勉強中。
          </p>
        </div>
      </section>

      <section className={styles.hobbySection}>
        <h3 className={styles.subHeading}>趣味</h3>
        <div className={styles.hobbyList}>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/sakura.jpg"
              alt="趣味1"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
             <Image
              src="/images/sakura3.jpg"
              alt="趣味1"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
             
            <p className={styles.hobbyText}>私の趣味のひとつは花の写真を撮ることです。特に日本でとても有名な桜の花を撮影するのが好きです。桜の儚い美しさや柔らかな色合いをカメラに収めることで、自然の細やかな魅力を感じられます。この趣味は、日々の生活やウェブデザインのクリエイティビティにも大きな刺激を与えています。</p>
          </article>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/donton.jpg"
              alt="趣味2"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            <Image
              src="/images/osaka.jpg"
              alt="趣味2"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            
            <p className={styles.hobbyText}>私は旅行も大好きで、新しい場所を探検するのが好きです。昨年は大阪へ旅行に行き、活気あふれる街並みや美味しい食べ物、豊かな文化を満喫しました。旅行は視野を広げてくれ、ウェブ開発者としての創造力にも良い刺激を与えてくれます。</p>
          </article>
          {/* 必要に応じてカードを追加 */}
        </div>
      </section>
    </main>
  );
}
