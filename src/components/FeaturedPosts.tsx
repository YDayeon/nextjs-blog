import { getFeaturedPosts } from "@/app/service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <article className="px-10 mt-16">
      <h2 className="mt-5 mb-6 font-bold text-xl">Featured Posts</h2>
      <PostsGrid posts={featuredPosts} />
    </article>
  );
}
