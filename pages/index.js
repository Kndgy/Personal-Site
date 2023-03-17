import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import emil from '../public/emil.jpg'
import { getSortedPostsData } from '../components/posts'
import PostTemplate from '../components/PostTemplate'
import Link from 'next/link'
import ProjectContainer from './projectContainer'
import { data } from '../data/data.js';

export async function getStaticProps() {

  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      data
    },
  };
}

export default function Home({data, allPostsData}) {
  console.log(data)
  let AllPost = Array.from(allPostsData)
  const Post = AllPost.filter(e => e.type !== "project")

  return (
    <div className={styles.container}>
      <Head>
        <title>kanarui.dev</title>
      </Head>
      <div className={styles.topContainer}>
        <div className={styles.navLink}>
          <ul>
            <li>
              <a href='#project'>projects</a>
            </li>
            <li>
              <a href='#blog'>Blog</a>
            </li>
          </ul>
        </div>
        <div className={styles.homeContainer}>
          <div className={styles.title}>
            I develop Web, Software, and Video Games
          </div>
          <div className={styles.subTitle}>
            Hi, I like to code and draw, and I'm interested in web, software, and video games development.
            <p/> 
            most of my skills are related to Web tech with React/Native Framework, and C++ on Unreal engine 
            for video game development,
            <br/>
            find me on
            <br/>
            <a href='https://github.com/Kndgy'>github.com/Kndgy</a> | <a href="mailto: ghanirafli8@gmail.com">Email - ghanirafli8@gmail.com</a> | <a href='#'>Discord - kan#9105</a>
            <p/>
            i also draw on my free time to refresh my mind, check my art on <a href='https://www.instagram.com/kannnn_0/'>instagram.com/kannnn_0/</a>
          </div>
        </div>
      </div>
      <div className={styles.placehold}>
      </div>
      <ProjectContainer data={data} id="project"/>
      <div id='blog' className={styles.postContainer}>
        {/* <div id='' className={styles.leftContainer}>
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
        </div> */}
        <div className={styles.rightContainer}>
          <div className={styles.rightContent}>
            <h1>Posts</h1>
              {Post.map(({ id, date, title, desc, category, tags, type }) => (
                <Link key={id} href={`posts/${id}`}>
                  <a>
                    <PostTemplate title={title} desc={desc} category={category} date={date} tags={tags}/>
                  </a>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}