import { fetchOnePost } from "@/scripts/fetcher";
import PostCard from "@/components/PostCard/PostCard";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const FavouriteArticles = async ({ id }: { id: number }) => {
    const data = await fetchOnePost(id);
    await delay(Math.random() * (5999 - 1000) + 1000);
    return (
        <PostCard key={data.id} title={data.title} body={data.body} />
    );
};

export default FavouriteArticles;
