
import Image from "next/image";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaGithub, FaPhp, FaVuejs, FaLaravel
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiExpress } from "react-icons/si";
import { getSkillList } from "../_libs/microcms";
import styles from "./page.module.css";

// Map icon names to React icon components
const iconMap: Record<string, JSX.Element> = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJsSquare />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <FaNodeJs />,
  Express: <SiExpress />,
  GitHub: <FaGithub />,
  PHP: <FaPhp />,
  Laravel: <FaLaravel />,
  "Vue.js": <FaVuejs />,
};

export default async function SkillPage() {
  const { contents } = await getSkillList();


  return (
    <main className={styles.container} id="skill">
      <h2 className={styles.heading}>Skill</h2>
      <p className={styles.text}>
        私は、HTML、CSS、JavaScript、TypeScript、PHP、Laravelフレームワークなど、多岐にわたるプログラミング言語と技術に習熟しています。フロントエンド開発では、React.jsやVue.jsといったフレームワークを活用し、バックエンド開発ではNode.jsやNext.jsを用いた開発経験があります。データベースについては、MySQLを中心に扱っています。これらの技術に対する理解は確かなものですが、常に専門知識を深め、最新の技術動向を追い続けています。
      </p>
      <div className={styles.skillGrid}>
        {contents.map((skill) => {
          const IconComponent = iconMap[skill.name];
          
          return (
            <div key={skill.id} className={styles.skillCard}>
              {IconComponent ? (
                <div className={styles.icon}>{IconComponent}</div>
              ) : skill.icon?.url ? (
                <Image
                  src={skill.icon.url}
                  alt={skill.name}
                
                  className={styles.icon}
                />
              ) : (
                <div className={styles.iconPlaceholder} />
              )}
              <p className={styles.skillName}>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
