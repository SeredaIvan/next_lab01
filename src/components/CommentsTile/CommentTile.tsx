import {Comment} from "@/types/types";

const CommentTile = ({ id, name, body, postId, email }: Comment) => {
    return (
        <li key={id} className="border-b py-2">
            <p className="text-sm font-bold">{name}</p>
            <p className="text-gray-700">{body}</p>
            <p className="text-xs text-gray-500">{email}</p>
            <p className="text-xs text-gray-500">{postId}</p>
        </li>
    );
};

export default CommentTile;