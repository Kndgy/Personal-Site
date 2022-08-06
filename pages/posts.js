import fs from 'fs';
import matter from 'gray-matter';
// import Image from 'next/image';
import Link from 'next/link';

export default function Blog({posts}){
    return <main>
        {posts.map(post => {

            const {slug, frontmatter} = post;
            
            const {title, author, category, date, bannerImage, tags} = frontmatter

            return <article key={title}>
                <Link href={`/posts/${slug}`}>
                    <h1>{title}</h1>
                </Link>
                <h3>{author}</h3>
                <h3>{date}</h3>
            </article>
        })}
    </main>
}

export async function getStaticProps(){

    const files = fs.readdirSync('posts');

    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);

        return {
          slug,
          frontmatter,
        };
    });

    return {
        props: {
          posts,
        },
    };
    
}