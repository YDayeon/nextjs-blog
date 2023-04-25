import path from 'path';
import { promises as fs } from 'fs';

export type TPost = {
  id: string;
  title: string;
  subTitle: string;
  createDate: string;
  tag: string;
  backgroundImage: string;
};
export async function getPosts(): Promise<TPost[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export async function getPost(id: string): Promise<TPost | undefined> {
  const posts = await getPosts();
  return posts.find((item) => item.id === id);
}
