import {fetchOnePost} from "@/scripts/fetcher";
import PostCard from "@/components/PostCard/PostCard";
import {PageProps, Post} from "@/types/types";
import Link from "next/link";

export async function generateStaticParams() {
    return [...Array(10)].map((_, i) => ({ id: (i + 1).toString() }));
}


const Page = async ( {params}:{params: Promise<{ id: string }>}) => {
    const resolvedParams = await params
    const id:number = parseInt(resolvedParams.id);
    const post:Post = await fetchOnePost(id);
    const path:string=`/articles/${id}/coments`

    return (
        <>
            <PostCard key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body} />
            <Link href={path}>Comments</Link>
        </>
    );
}
export default Page
