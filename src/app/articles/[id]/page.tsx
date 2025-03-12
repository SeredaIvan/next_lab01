import {fetchOnePost} from "@/scripts/fetcher";
import PostCard from "@/components/PostCard/PostCard";

const Page = async ({ params }: { params: { id: string } }) => {
    const data = await fetchOnePost(Number(params.id));
    const path=`/articles/${params.id}/coments`
    return (
        <>
            <PostCard key={data.id} title={data.title} body={data.body} />
            <a href={path}>Comments</a>
        </>
    );
}
export default Page