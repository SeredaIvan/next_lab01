import { fetchOnePost, fetchComentsByPostId } from "@/scripts/fetcher";
import PostCard from "@/components/PostCard/PostCard";
import ComentsList from "@/components/ComentsList/ComentsList";

const Page = async ({ params }: { params: { id: string } }) => {
    const post = await fetchOnePost(Number(params.id));
    const comments = await fetchComentsByPostId(Number(params.id));

    return (
        <div className="p-4">
            <PostCard key={post.id} title={post.title} body={post.body} />
            <ComentsList comments={comments} />
        </div>
    );
};

export default Page;
