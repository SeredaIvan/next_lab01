import CommentTile from "@/components/CommentsTile/CommentTile";
import {fetchComentsByPostId} from "@/scripts/fetcher";
import {Comment} from "@/types/types";

const CommentList = async ({ id }: { id: number }) => {
    const comments:Comment[]= await fetchComentsByPostId(id)

    if (comments.length === 0) return <p className="text-gray-500">No comments available.</p>;

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Comments:</h3>
            <ul>
                {comments.map((comment:Comment) => {
                    return (
                        <CommentTile
                            key={comment.id}
                            id={comment.id}
                            name={comment.name}
                            body={comment.body}
                            postId={comment.postId}
                            email={comment.email}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default CommentList;
