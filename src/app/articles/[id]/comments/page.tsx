import {fetchOnePost} from "@/scripts/fetcher";
import {PageProps, Post} from "@/types/types";
import CommentList from "@/components/ComentsList/ComentsList";
import PostCard from "@/components/PostCard/PostCard";



const Page = async ( {params}:{params: Promise<{ id: string }>}) => {
    const resolvedParams = await params

    const id:number = parseInt(resolvedParams.id, 10)
    const post :Post= await fetchOnePost(id)

    if (!post) {
        return <p className="text-red-500">Error: Post not found</p>;
    }

    return (
        <div className="p-4">
            <PostCard key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body} />
            <CommentList id={post.id} />
        </div>
    );
};

export default Page;