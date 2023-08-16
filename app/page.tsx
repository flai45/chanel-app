import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Post from "@/components/post";
export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: posts } = await supabase.from("posts").select();
  console.log("🚀 ~ file: page.tsx:8 ~ Index ~ posts:", posts)
  
  return (
    <ul className="my-auto">
      {posts?.map((post) => (
        <li key={post.id}>
          
          <Post src={post.imageUrl} text={post.text} />
        </li>
      ))}
    </ul>
  );
}