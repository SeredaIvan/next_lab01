import {fetchPosts} from "@/scripts/fetcher";
import PostCard from "@/components/PostCard/PostCard";

const Page = async ():Promise <any > => {
    const posts = await fetchPosts() || [];

    return (
        <div className="flex flex-wrap">
            {posts.length > 0 ? (
                posts.map((data) => (
                    <PostCard key={data.id} title={data.title} body={data.body} />
                ))
            ) : (
                <p className="text-gray-500">No posts available.</p>
            )}
        </div>
    );
};

export default Page;
