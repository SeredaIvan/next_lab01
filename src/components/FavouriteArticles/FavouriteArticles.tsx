import { fetchOnePost } from "@/scripts/fetcher";
import PostCard from "@/components/PostCard/PostCard";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const FavouriteArticles = async ({ id }: { id: number }) => {
    const post = await fetchOnePost(id);
    await delay(Math.random() * (5999 - 1000) + 1000);
    return (
        <PostCard key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} />
    );
};

export default FavouriteArticles;
