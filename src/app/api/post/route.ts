import { getPostData } from '@/app/service/posts';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchName = searchParams.get('search') || '';

  const posts = await getPostData(searchName);

  return NextResponse.json({ posts });
}
