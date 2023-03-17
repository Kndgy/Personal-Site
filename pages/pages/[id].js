import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function Item({ item }) {
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <Link href="/">
        <a>Go back to home</a>
      </Link>
    </div>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  const paths = data.map(item => ({
    params: { id: item.id.toString() }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  const item = data.find(item => item.id.toString() === params.id);

  return { props: { item } };
}
