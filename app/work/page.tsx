import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function WorkPage() {
  return (
    <main className={styles.container} id="work">
      <h2 className={styles.heading}>Project</h2>
      <p className={styles.text}>
        ここでは自分がこれまで制作してきたアプリやサイトを紹介します。各作品のサムネイルや簡単な説明文、GitHub リンクを載せましょう。
      </p>
      <ul className={styles.workList}>
        <li className={styles.workItem}>
         
         
          {/* <Link href="https://github.com/Sonar21/ice-cream" className={styles.link}>
            GitHub リポジトリはこちら
          </Link> */}
          <article className={styles.hobbyItem}>
            <Image
              src="/images/ice-cream.png"
              alt="趣味2"
              width={450}
              height={250}
              className={styles.hobbyImage}
            />
            <p>アイスクリームをテーマにしたウェブサイトです。ここでは、色とりどりのフレーバー紹介からレシピ、作り方の科学的なしくみ、さらにはオリジナルフレーバー提案まで、楽しく学びながら“アイスの世界”を探究できます。鮮やかなデザインと使いやすい構成で、まるで本物のアイスパーラーにいるような気分を味わえるはずです。どうぞゆっくりご覧ください！</p>
             <Link href="https://github.com/Sonar21/ice-cream" className={styles.link}>
            GitHub リポジトリはこちら
          </Link> 
          
          </article>
        </li>
         <li className={styles.workItem}>
       
 <article className={styles.hobbyItem}>
            <Image
              src="/images/ice-cream.png"
              alt="趣味2"
              width={450}
              height={250}
              className={styles.hobbyImage}
            />
            <p>アイスクリームをテーマにしたウェブサイトです。ここでは、色とりどりのフレーバー紹介からレシピ、作り方の科学的なしくみ、さらにはオリジナルフレーバー提案まで、楽しく学びながら“アイスの世界”を探究できます。鮮やかなデザインと使いやすい構成で、まるで本物のアイスパーラーにいるような気分を味わえるはずです。どうぞゆっくりご覧ください！</p>
             <Link href="https://github.com/Sonar21/ice-cream" className={styles.link}>
            GitHub リポジトリはこちら
          </Link> 
          
          </article>
        </li> 
        {/* {/* 必要に応じてリストを追加  */}
      </ul>
    </main>
  );
}
