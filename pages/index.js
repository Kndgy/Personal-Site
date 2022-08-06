import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import emil from '../public/emil.jpg'
import ProjectTemplate from '../components/ProjectTemlate'
import data from '../data/projects.json'
import { getSortedPostsData } from '../components/posts'
import PostTemplate from '../components/PostTemplate'
import Link from 'next/link'
// import Link from 'next/link';

export default function Home({allPostsData}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>kanarui.dev</title>
      </Head>
      <div className={styles.ContentContainer}>
        <div id='#first' className={styles.leftContainer}>
          <div className={styles.leftContent}>
            <div className={styles.Picture}>
              <span className={styles.cr}>art by D.K</span>
              <div className={styles.pictureContainer}>
                <Image src={emil} alt='emil' />
              </div>
            </div>
            <div className={styles.About}>
              hello there! i'm kan. a self proclaimed artist and software engineer, 
              this is where i put my stuff on the internet. 
              pretty much its just a bunch of stuff i'm doing and things i write.
            </div>
            <div className={styles.Social}>
              <Link href={'/'}>Home</Link>|<a href='https://github.com/Kndgy'>Github</a>|<a href="mailto: ghanirafli8@gmail.com">Email</a>|<a href='#'>Discord</a>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.rightContent}>
            <h1>Personal Projects</h1>
              {data.map((project) => {
                return(
                  <ProjectTemplate key={project.title} title={project.title} desc={project.description} siteLink={project.site} sourceLink={project.source}/>
                )
              })}
            <h1>Posts</h1>
              {allPostsData.map(({ id, date, title, desc, category, tags }) => (
                <PostTemplate key={id} title={title} desc={desc} category={category} date={date} tags={tags}/>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}