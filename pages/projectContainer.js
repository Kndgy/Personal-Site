import Image from 'next/image'
import styles from '../styles/projectContainer.module.css'
import emil from '../public/emil.jpg'
import proj1 from '../public/proj-1.png'

function ProjectTemplate({image, title, description, Link, LinkText, button='Learn more', index}){
    if(index % 2 === 0){
        return(
            <div className={styles.projects}>
                <div className={styles.image}><Image alt="image" src={image} className={styles.image}/></div>
                <div className={styles.text}>
                    <div className={styles.projectTitle}>{title}</div>
                    <div className={styles.subTitle}>{description}</div>
                    <div className={styles.button}>
                        <button className={styles.projectButton}>{button}</button>
                        <button className={styles.projectButton}><a href={Link}>{LinkText}</a> </button>
                        <button className={styles.projectButton}>Source code</button>
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
                <button className={styles.projectButton}>{button}</button>
                <button className={styles.projectButton}> <a href={Link}>{LinkText}</a> </button>
                <button className={styles.projectButton}>Source code</button>
            </div>
        </div>
        <div className={styles.image}><Image alt="image" src={image} className={styles.image}/></div>
    </div>
    )
}

const projectList = [
    {
        image:proj1,
        title:'Nier Automata Wiki | Design System',
        description:'description',
        Link:'',
        LinkText:'Go to site',
        id:1
    },
    {
        image:emil,
        title:'Nier Automata Modular UI Components',
        description:'description',
        Link:'',
        LinkText:'Go to site',
        id:1
    },
    {
        image:emil,
        title:'JSX to Unreal UMG UI',
        description:'description',
        Link:'',
        LinkText:'Go to site',
        id:1
    },
    {
        image:emil,
        title:'ReactNode to JSON Transformer',
        description:'description',
        Link:'',
        LinkText:'Go to site',
        id:1
    },
    {
        image:emil,
        title:'FoodShare',
        description:'description',
        Link:'',
        LinkText:'Go to site',
        id:1
    },
]

export default function ProjectContainer({data}){
    return(
        <div className={styles.container}>
            <div className={styles.title}>Side Project</div>
            <div>
              <h1>JSON Data</h1>
                {data.map(items => (
                  <li key={items.id}>
                    <a href={`/pages/${items.id}`}>{items.title}</a>
                  </li>
                ))}
            </div>
            {projectList.map((item,index)=>(
                <ProjectTemplate
                    key={index}
                    index={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    Link={`/pages/${item.id}`}
                    LinkText={item.LinkText}
                />
            ))}
        </div>
    )
}