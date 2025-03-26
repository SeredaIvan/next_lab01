import {fetchPosts} from "@/scripts/fetcher";
import PostCard from "@/components/PostCard/PostCard";
import {JSX} from "react";

export async function generateStaticParams() {
    return [{}]
}

const Page = async ():Promise <JSX.Element> => {
    const posts = await fetchPosts() || []

    return (
        <div className="flex flex-wrap">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <PostCard key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body} />
                ))
            ) : (
                <p className="text-gray-500">No posts available.</p>
            )}
        </div>
    );
};

export default Page;
