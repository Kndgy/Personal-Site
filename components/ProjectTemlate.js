import Head from 'next/head';
import styles from '../styles/ProjectTemplate.module.css'

const ProjectTemplate = ({desc, title, siteLink, sourceLink}) =>{
  const siteChecker = (type) =>{
    if(!siteLink && !sourceLink) {
      return(
        <></>
      )
    } else{
      return(
        <>{type}</>
      )
    }
  }
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
      <div className={styles.link}>
        <a href={siteLink}>{siteChecker("Website")} </a> {siteChecker("|")} <a href={sourceLink}>{siteChecker("Source code")}</a>
      </div>
    </div>
  )
}

export default ProjectTemplate;