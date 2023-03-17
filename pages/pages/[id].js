import path from 'path';
import Link from 'next/link';
import { data } from '../../data/data.js';

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

  const paths = data.map(item => ({
    params: { id: item.id.toString() }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const item = data.find(item => item.id.toString() === params.id);

  return { props: { item } };
}
