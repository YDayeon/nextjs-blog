import { getFeaturedPosts } from '@/app/service/posts';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await getFeaturedPosts();

  return NextResponse.json({ posts });
}
