import React from "react";
import { fetchComentsByPostId } from "@/scripts/fetcher";
import { Comment } from "@/types/types";
import CommentTile from "@/components/CommentsTile/CommentTile";
import {List} from "@mui/material";

const CommentList = async ({ id }: { id: number }) => {
    const comments: Comment[] = await fetchComentsByPostId(id);

    if (comments.length === 0) {
        return <p className="text-gray-500">No comments available.</p>;
    }

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Comments:</h3>
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: "bg-palitra-1-2" }}>
                {
                    comments.map((comment: Comment) => (
                    <CommentTile key={comment.id}
                                 id={comment.id}
                                 name={comment.name}
                                 email={comment.email}
                                 body={comment.body}
                                 postId={comment.postId}/>
                ))
                }
            </List>
        </div>
    );
};

export default CommentList;
