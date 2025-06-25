import { FaEarListen, FaBrain, FaMagnifyingGlass , FaLanguage } from "react-icons/fa6";

import styles from "./page.module.css";

export default function StrengthsPage() {
  return (
    <main className={styles.container} id="strengths">
      <h2 className={styles.heading}>Strengths</h2>
      <p className={styles.text}>
        Work や Skill がまだ少ない場合は、ここで自分の「強み」を大きくアピールしましょう。
      </p>

      {/* 聞く力 */}
      <section className={styles.strengthSection}>
        {/* <h3 className={styles.subHeading}>聞く力</h3> */}
        <h3 className={styles.subHeading}>
  <FaEarListen style={{ marginRight: '8px' }} /> 聞く力
</h3>

        <p className={styles.strengthText}>
          相手の話を最後までしっかりと聞き、本当に伝えたいことや気持ちを引き出すのが得意です。会話の中でよく「聞き上手だね」と言われることが多く、信頼関係を築くきっかけにもなっています。
        </p>
      </section>

      {/* 論理的思考 */}
      <section className={styles.strengthSection}>
        {/* <h3 className={styles.subHeading}>論理的思考</h3> */}
        <h3 className={styles.subHeading}>
  <FaBrain style={{ marginRight: '8px' }} /> 論理的思考
</h3>

        <p className={styles.strengthText}>
          パズルやボードゲームで戦略を立てて勝つことが好きで、推理小説では犯人を先に見抜くことも多いです。
          論理的に物事を考えるのが得意で、新しい言語の習得にも積極的に取り組んでおり、短期間で基本的な会話力を身につけることができます。
        </p>
      </section>

      {/* 探究心 */}
      <section className={styles.strengthSection}>
        {/* <h3 className={styles.subHeading}>探究心</h3> */}
        <h3 className={styles.subHeading}>
  <FaMagnifyingGlass style={{ marginRight: '8px' }} />探究心
</h3>
        <p className={styles.strengthText}>
        興味を持ったことは徹底的に調べるタイプで、「蝶番」の歴史をたどった結果、江戸時代の建築文化まで調べてしまったこともあります。この探究心が学びやスキル習得に役立っています。
        </p>
      </section>

      {/* 言語 */}
      <section className={styles.strengthSection}>
        {/* <h3 className={styles.subHeading}>言語</h3> */}
        <h3 className={styles.subHeading}>
  <FaLanguage style={{ marginRight: '8px' }} /> 言語
</h3>
        <p className={styles.strengthText}>
         英語を日常会話レベルで話すことができ、ミャンマー語（母語）、ヒンディー語、日本語も使えます。複数の言語と文化に触れてきた経験から、旅行先でもスムーズにコミュニケーションをとるのが得意です。
        </p>
      </section>
    </main>
  );
}
