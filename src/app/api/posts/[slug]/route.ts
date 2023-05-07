import { getPostsByCategory } from '@/app/service/posts';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { slug: string };
  }
) {
  const posts = await getPostsByCategory(params.slug);

  return NextResponse.json({ posts });
}
