import Head from 'next/head';
import styles from '../styles/PostTemplate.module.css'

const PostTemplate = ({desc, title,}) =>{
  return(
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.desc}>
        <div>
          {desc}
        </div>
      </div>
    </div>
  )
}

export default PostTemplate;