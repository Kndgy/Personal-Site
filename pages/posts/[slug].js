import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'

export default function Post({frontmatter, content}) {

  const {title, author, category, date, bannerImage, tags} = frontmatter

  return <main>
      {/* <img src={bannerImage}/> */}
      <h1>{title}</h1>
      <h2>{author} || {date}</h2>
      <h3>{category} || {tags.join()}</h3>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
  </main>
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