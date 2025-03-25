import {fetchOnePost} from "@/scripts/fetcher";
import PostCard from "@/components/PostCard/PostCard";
import {PageProps, Post} from "@/types/types";
import Link from "next/link";

export async function generateStaticParams() {
    return [
        { id: "1" },
        { id: "2" },
        { id: "3" },
        { id: "4" },
        { id: "5" },
        { id: "6" },
        { id: "7" },
        { id: "8" },
        { id: "9" },
        { id: "10" },
    ];
}


const Page = async ( {params}:PageProps) => {
    const resolvedParams = await params
    const id:number = parseInt(resolvedParams.id);
    const post:Post = await fetchOnePost(id);
    const path:string=`/articles/${id}/comments`


    return (
        <>
            <PostCard key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body} />
            <Link href={path}>Comments</Link>
        </>
    );
}
export default Page
