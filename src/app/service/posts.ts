import path from 'path';
import { readFile } from 'fs/promises';

export type TPost = {
  title: string;
  description: string;
  createDate: string;
  category: string;
  backgroundImage: string;
  path: string;
  featured: boolean;
};
export type TPostData = {};

export async function getFeaturedPosts(): Promise<TPost[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getAllPosts(): Promise<TPost[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<TPost[]>(JSON.parse)
    .then((posts) =>
      posts.sort((a, b) => (a.createDate > b.createDate ? -1 : 1))
    );
}

export function getPostData(fileName: string): Promise<TPostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  return readFile(filePath, 'utf-8');
}

export async function getPost(id: string): Promise<TPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((item) => item.path === id);
}

// export async function getStaticProps() {
//   readFile;
//   return { props: {} };
// }
