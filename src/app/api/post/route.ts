import { getPost } from '@/app/service/posts';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path') || '';
  const post = await getPost(path);

  return NextResponse.json({ post });
}
