import Image from 'next/image'
import styles from '../styles/projectContainer.module.css'

function ProjectTemplate({image, title, description, site, Link, siteText, repo, button='Learn more', index}){
    function codeCheck(){
        if(site){
            return <button className={styles.projectButton}><a href={site}>{siteText}</a> </button>
        }else{
            return
        }
    }
    function siteCheck(){
        if(repo){
            return <button className={styles.projectButton}><a href={repo}>Source code</a></button>
        }else{
            return
        }
    }
    if(index % 2 === 0){
        return(
            <div className={styles.projects}>
                <div className={styles.image}><Image alt="image" src={image} className={styles.image}/></div>
                <div className={styles.text}>
                    <div className={styles.projectTitle}>{title}</div>
                    <div className={styles.subTitle}>{description}</div>
                    <div className={styles.button}>
                        <button className={styles.projectButton}><a href={Link}>{button}</a></button>
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
            <button className={styles.projectButton}><a href={Link}>{button}</a></button>
                {codeCheck()}
                {siteCheck()}
            </div>
        </div>
        <div className={styles.image}><Image alt="image" src={image} className={styles.image}/></div>
    </div>
    )
}

export default function ProjectContainer({data}){
    return(
        <div className={styles.container}>
            <div className={styles.title}>Side Project</div>
            {data.map((item,index)=>(
                <ProjectTemplate
                    key={index}
                    index={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    Link={`/pages/${item.id}`}
                    siteText={item.LinkText}
                    site={item.site}
                    repo={item.repo}
                />
            ))}
        </div>
    )
}