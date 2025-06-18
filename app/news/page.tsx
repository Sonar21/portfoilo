// app/news/page.tsx
import Image from 'next/image';
import styles from './page.module.css';
import { getNewsList} from "../_libs/microcms";

export default async function NewsPage() {
  const { contents } = await getNewsList(); // fetch data via client.getList

  return (
    <div className={styles['news-container']}>
  <h2 className={styles.heading}>News</h2>
  <div className={styles['news-wrapper']}>
    {contents.map(({ id, title, description, image }) => (
      <div key={id} className={styles['news-card']}>
        <Image
          src={image.url}
          alt={title}
          width={image.width}
          height={image.height}
          className={styles.image}
        />
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

