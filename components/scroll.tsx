"use client"
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from './post.jsx'
const supabase = createClient(
    'https://your-supabase-url.supabase.co',
    'your-api-key'
);

export default async function Scroll() {
    const [posts, setPosts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const { data, error } = await supabase
            .from('posts')
            .select()
            .range(0, 9);

        setPosts(data);
    };

    const fetchMoreData = async () => {
        const { data, error } = await supabase
            .from('posts')
            .select()
            .range(page * 10, (page + 1) * 10 - 1);

        if (data.length === 0 || error) {
            setHasMore(false);
            return;
        }

        setPosts(posts.concat(data));
        setPage(page + 1);
    };
    if (!posts) {
        return <p>Loading</p>; 
      }
    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
        >
            {posts.map(post => (
                <Post key={post.id} />
            ))}
        </InfiniteScroll>)
}