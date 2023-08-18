import React from 'react';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Post from "../components/post";
import { createClient } from '@supabase/supabase-js'

export default async function Home() {

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)
const { data: posts } = await supabase.from("posts").select();
  
  return (
    <ul>
      {posts?.map(post => (
        <li key={post.id}>
          <Post src={post.imageUrl} text={post.text} />  
        </li>
      ))}
    </ul>
  );
}