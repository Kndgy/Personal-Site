import Image from 'next/image'
import styles from '../styles/projectContainer.module.css'
import Link from 'next/link'

function ProjectTemplate({image, title, description, site, link, siteText, repo, button='Learn more', index}){
    function codeCheck(){
        if(site){
            return <a href={site}> <button className={styles.projectButton}> {siteText} </button> </a>
        }else{
            return
        }
    }
    function siteCheck(){
        if(repo){
            return <a href={repo}><button className={styles.projectButton}>Repository</button></a>
        }else{
            return
        }
    }
    if(index % 2 === 0){
        return(
            <div className={styles.projects}>
                <div style={{ width: '300px', height: '300px' }} className={styles.image}><Image width={500} height={500} alt="image" src={image} className={styles.image}/></div>
                <div className={styles.text}>
                    <div className={styles.projectTitle}>{title}</div>
                    <div className={styles.subTitle}>{description}</div>
                    <div className={styles.button}>
                        <Link href={link}><button className={styles.projectButton}>{button}</button></Link>
                        {codeCheck()}
                        {siteCheck()}
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className={styles.projectsAlt}>
        <div className={styles.text}>
            <div className={styles.projectTitle}>{title}</div>
            <div className={styles.subTitle}>{description}</div>
            <div className={styles.button}>
                <Link href={Link}><button className={styles.projectButton}>{button}</button></Link>
                {codeCheck()}
                {siteCheck()}
            </div>
        </div>
        <div className={styles.image}><Image width={500} height={500} alt="image" src={image} className={styles.image}/></div>
    </div>
    )
}

export default function ProjectContainer({data}){
    return(
        <div className={styles.container}>
            <div className={styles.title}>Side Project</div>
            {data?.map((item,index)=>(
                <ProjectTemplate
                    key={index}
                    index={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    link={`/pages/${item.id}`}
                    siteText={item.LinkText}
                    site={item.site}
                    repo={item.repo}
                />
            ))}
        </div>
    )
}