import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import styles from '../../styles/PostContent.module.css'

export default function Post({frontmatter, content}) {

  const {title, desc, category, date, bannerImage, tags} = frontmatter

  return (
    <main className={styles.container}>
        {/* <img src={bannerImage}/> */}
        <h1>{title}</h1>
        <h2>{date}</h2>
        <h3>{category} {tags.join()}</h3>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </main>
  )
}

export async function getStaticPaths() {

const files = fs.readdirSync("posts");

const paths = files.map((fileName) => ({
  params: {
    slug: fileName.replace(".md", ""),
  },
}));

return {
  paths,
  fallback: false,
};
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}