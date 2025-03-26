import { Post } from "@/types/types";
import Image from "next/image";

const PostCard = ({ title, body }: Post) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-palitra-1-5">
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-3 bg-palitra-1-2 ">
                <Image
                    className="w-full"
                    src="https://v1.tailwindcss.com/img/card-top.jpg"
                    alt={title}
                    width={500}
                    height={300}
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-palitra-1-6">{title}</div>
                    <p className="text-base text-palitra-1-5">{body}</p>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
