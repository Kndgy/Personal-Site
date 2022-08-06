import Head from 'next/head';
import styles from '../styles/PostTemplate.module.css'

const PostTemplate = ({desc, title, date, tags, category}) =>{
  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <h6>{date}</h6>
        <span className={styles.title}>{title}</span>
      </div>
      <div>
        {desc}
      </div>
      {category}
      {tags}
    </div>
  )
}

export default PostTemplate;