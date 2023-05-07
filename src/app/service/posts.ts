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

export async function getFeaturedPosts(): Promise<TPost[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getPostsByCategory(params: string | null) {
  return getAllPosts().then((posts) =>
    posts.filter((post) => {
      if (params === 'all' || params === null) {
        return true;
      } else {
        return post.category === params;
      }
    })
  );
}

export async function getAllPosts(): Promise<TPost[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<TPost[]>(JSON.parse)
    .then((posts) =>
      posts.sort((a, b) => (a.createDate > b.createDate ? -1 : 1))
    );
}

// export async function getPost(id: string): Promise<TPost | undefined> {
//   const posts = await getPosts();
//   return posts.find((item) => item.id === id);
// }

// export async function getStaticProps() {
//   readFile;
//   return { props: {} };
// }
