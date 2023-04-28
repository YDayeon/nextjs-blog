import Image from "next/image";
import { Inter } from "next/font/google";
import MyInfoCard from "@/components/MyInfoCard";
import { getPosts } from "./service/posts";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const featuredPosts = await getPosts();
  console.log(featuredPosts);
  return (
    <main>
      <MyInfoCard />
      <article>
        <h2>Featured Posts</h2>
        <ul className="flex flex-wrap gap-20">
          {featuredPosts.map((post) => (
            <li className="">
              <div className="bg-sky-200 rounded-3xl">
                <div>
                  <Image
                    src={post.backgroundImage}
                    width={450}
                    height={200}
                    alt="post background"
                  />
                </div>
                <div className="py-3 px-5">
                  <h3>{post.title}</h3>
                  <p>{post.subTitle}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <h2>You may Like</h2>
      </article>
    </main>
  );
}
