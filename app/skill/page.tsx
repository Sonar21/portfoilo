
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPhp,
  FaVuejs,
  FaLaravel,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiExpress } from "react-icons/si";
import styles from "./page.module.css";

export default function SkillPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Skill</h2>
      <p className={styles.text}>
        これまで勉強した言語や現在学習中の技術を載せましょう。
        「半分ぐらいしか理解していないけど…」というものでも積極的に書き、学習のモチベーションに変えましょう。
      </p>
      <div className={styles.skillGrid}>
        <div className={styles.skillCard}>
          <FaHtml5 className={styles.icon} />
          <p>HTML</p>
        </div>
        <div className={styles.skillCard}>
          <FaCss3Alt className={styles.icon} />
          <p>CSS</p>
        </div>
        <div className={styles.skillCard}>
          <FaJsSquare className={styles.icon} />
          <p>JavaScript</p>
        </div>
        <div className={styles.skillCard}>
          <SiTypescript className={styles.icon} />
          <p>TypeScript</p>
        </div>
        <div className={styles.skillCard}>
          <FaReact className={styles.icon} />
          <p>React</p>
        </div>
        <div className={styles.skillCard}>
          <SiNextdotjs className={styles.icon} />
          <p>Next.js</p>
        </div>
        <div className={styles.skillCard}>
          <FaNodeJs className={styles.icon} />
          <p>Node.js</p>
        </div>
        <div className={styles.skillCard}>
          <SiExpress className={styles.icon} />
          <p>Express</p>
        </div>
        <div className={styles.skillCard}>
          <FaGithub className={styles.icon} />
          <p>GitHub</p>
        </div>
        <div className={styles.skillCard}>
          <FaPhp className={styles.icon} />
          <p>PHP</p>
        </div>
        <div className={styles.skillCard}>
          <FaLaravel className={styles.icon} />
          <p>Laravel</p>
        </div>
        <div className={styles.skillCard}>
          <FaVuejs className={styles.icon} />
          <p>Vue.js</p>
        </div>
      </div>
    </main>
  );
}
