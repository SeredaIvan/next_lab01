const CommentList = ({ comments }: { comments: { id: number, name: string, body: string }[] }) => {
    if (!comments.length) return <p className="text-gray-500">No comments available.</p>;

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Comments:</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id} className="border-b py-2">
                        <p className="text-sm font-bold">{comment.name}</p>
                        <p className="text-gray-700">{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentList;
