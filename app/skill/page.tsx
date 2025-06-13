
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaReact,
//   FaNodeJs,
//   FaGithub,
//   FaPhp,
//   FaVuejs,
//   FaLaravel,
// } from "react-icons/fa";
// import { SiTypescript, SiNextdotjs, SiExpress } from "react-icons/si";
// import { getSkillsList } from "../_libs/microcms";
// import styles from "./page.module.css";

// export default  async function SkillPage() {

//   const data =await getSkillsList();
//   return (
//     <main className={styles.container} id="skill">
//       <h2 className={styles.heading}>Skill</h2>
//       <p className={styles.text}>
//         私は、HTML、CSS、JavaScript、TypeScript、PHP、Laravelフレームワークなど、多岐にわたるプログラミング言語と技術に習熟しています。フロントエンド開発では、React.jsやVue.jsといったフレームワークを活用し、バックエンド開発ではNode.jsやNext.jsを用いた開発経験があります。データベースについては、MySQLを中心に扱っています。これらの技術に対する理解は確かなものですが、常に専門知識を深め、最新の技術動向を追い続けています。
//       </p>
//       <div className={styles.skillGrid}>
//         <div className={styles.skillCard}>
//           <FaHtml5 className={styles.icon} />
//           <p></p>
//         </div>
//         <div className={styles.skillCard}>
//           <FaCss3Alt className={styles.icon} />
//           <p>CSS</p>
//         </div>
//         <div className={styles.skillCard}>
//           <FaJsSquare className={styles.icon} />
//           <p>JavaScript</p>
//         </div>
//         <div className={styles.skillCard}>
//           <SiTypescript className={styles.icon} />
//           <p>TypeScript</p>
//         </div>
//         <div className={styles.skillCard}>
//           <FaReact className={styles.icon} />
//           <p>React</p>
//         </div>
//         <div className={styles.skillCard}>
//           <SiNextdotjs className={styles.icon} />
//           <p>Next.js</p>
//         </div>
//         <div className={styles.skillCard}>
//           <FaNodeJs className={styles.icon} />
//           <p>Node.js</p>
//         </div>
//         <div className={styles.skillCard}>
//           <SiExpress className={styles.icon} />
//           <p>Express</p>
//         </div>
//         <div className={styles.skillCard}>
//           <FaGithub className={styles.icon} />
//           <p>GitHub</p>
//         </div>
//         <div className={styles.skillCard}>
//           <FaPhp className={styles.icon} />
//           <p>PHP</p>
//         </div>
//         <div className={styles.skillCard}>
//           <FaLaravel className={styles.icon} />
//           <p>Laravel</p>
//         </div>
//         <div className={styles.skillCard}>
//           <FaVuejs className={styles.icon} />
//           <p>Vue.js</p>
//         </div>
//       </div>
//     </main>
//   );
// }


// import Image from "next/image";
// import {
//   FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
//   FaGithub, FaPhp, FaVuejs, FaLaravel
// } from "react-icons/fa";
// import { SiTypescript, SiNextdotjs, SiExpress } from "react-icons/si";
// import { getSkillsList, Skill } from "../_libs/microcms";
// import styles from "./page.module.css";

// // Map icon names to React icon components
// const iconMap: Record<string, JSX.Element> = {
//   HTML: <FaHtml5 />,
//   CSS: <FaCss3Alt />,
//   JavaScript: <FaJsSquare />,
//   TypeScript: <SiTypescript />,
//   React: <FaReact />,
//   "Next.js": <SiNextdotjs />,
//   "Node.js": <FaNodeJs />,
//   Express: <SiExpress />,
//   GitHub: <FaGithub />,
//   PHP: <FaPhp />,
//   Laravel: <FaLaravel />,
//   "Vue.js": <FaVuejs />,
// };

// export default async function SkillPage() {
//   const data = await getSkillsList({ limit: 50 });
//   const skills = data.contents as Skill[];

//   return (
//     <main className={styles.container} id="skill">
//       <h2 className={styles.heading}>Skill</h2>
//       <p className={styles.text}>
//         私は、HTML、CSS、JavaScript、TypeScript、PHP、Laravelフレームワークなど、多岐にわたるプログラミング言語と技術に習熟しています。フロントエンド開発では、React.jsやVue.jsといったフレームワークを活用し、バックエンド開発ではNode.jsやNext.jsを用いた開発経験があります。データベースについては、MySQLを中心に扱っています。これらの技術に対する理解は確かなものですが、常に専門知識を深め、最新の技術動向を追い続けています。
//       </p>
//       <div className={styles.skillGrid}>
//         {skills.map((skill) => {
//           const IconComponent = iconMap[skill.name];
//           return (
//             <div key={skill.id} className={styles.skillCard}>
//               {IconComponent ? (
//                 <div className={styles.icon}>{IconComponent}</div>
//               ) : skill.icon?.url ? (
//                 <Image
//                   src={skill.icon.url}
//                   alt={skill.name}
//                   width={64}
//                   height={64}
//                   className={styles.icon}
//                 />
//               ) : (
//                 <div className={styles.iconPlaceholder} />
//               )}
//               <p>{skill.name}</p>
//             </div>
//           );
//         })}
//       </div>
//     </main>
//   );
// }
import Image from "next/image";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaGithub, FaPhp, FaVuejs, FaLaravel
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiExpress } from "react-icons/si";
import { getAllSkills, Skill } from "../_libs/microcms"; // <- updated
import styles from "./page.module.css";

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
  const skills = await getAllSkills(); // fetch all data with pagination

  return (
    <main className={styles.container} id="skill">
      <h2 className={styles.heading}>Skill</h2>
      <p className={styles.text}>
        私は、HTML、CSS、JavaScript、TypeScript、PHP、Laravelフレームワークなど、多岐にわたるプログラミング言語と技術に習熟しています。フロントエンド開発では、React.jsやVue.jsといったフレームワークを活用し、バックエンド開発ではNode.jsやNext.jsを用いた開発経験があります。データベースについては、MySQLを中心に扱っています。これらの技術に対する理解は確かなものですが、常に専門知識を深め、最新の技術動向を追い続けています。
      </p>
      <div className={styles.skillGrid}>
        {skills.map((skill) => {
          const IconComponent = iconMap[skill.name];
          return (
            <div key={skill.id} className={styles.skillCard}>
              {IconComponent ? (
                <div className={styles.icon}>{IconComponent}</div>
              ) : skill.icon?.url ? (
                <Image
                  src={skill.icon.url}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className={styles.icon}
                />
              ) : (
                <div className={styles.iconPlaceholder} />
              )}
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
