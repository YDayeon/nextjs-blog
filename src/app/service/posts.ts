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
type TContent = {
  title: string;
  description: string;
  path: string;
  backgroundImage: string;
};
export type TPostResult = {
  prevContent: TContent | null;
  nextContent: TContent | null;
  post: TPost;
};

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

export async function getPost(id: string): Promise<TPostResult | undefined> {
  let filteredIndex = 0;
  const posts = await getAllPosts();
  const filteredPost = posts.find((item, i) => {
    filteredIndex = i;
    return item.path === id;
  });
  const prevContent =
    filteredIndex === 0
      ? posts[posts.length - 1 - 1]
      : posts[filteredIndex - 1];
  const nextContent =
    filteredIndex === posts.length - 1
      ? posts[posts.length - 1]
      : posts[filteredIndex + 1];
  if (!!filteredPost) {
    return {
      prevContent: !!prevContent
        ? {
            title: prevContent.title,
            description: prevContent.description,
            path: prevContent.path,
            backgroundImage: prevContent.backgroundImage,
          }
        : null,
      nextContent: !!nextContent
        ? {
            title: nextContent.title,
            description: nextContent.description,
            path: nextContent.path,
            backgroundImage: nextContent.backgroundImage,
          }
        : null,
      post: filteredPost,
    };
  } else {
    return undefined;
  }
}

// export async function getStaticProps() {
//   readFile;
//   return { props: {} };
// }
