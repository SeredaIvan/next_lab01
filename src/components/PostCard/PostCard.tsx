import {Post} from "@/types/types";
import Image from "next/image";

const PostCard = ({ title, body }:Post) => {
    return (
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-gray-500'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-3 bg-white-500">
                <Image className="w-full"
                       src='https://v1.tailwindcss.com/img/card-top.jpg'
                       alt={title}
                       width={500}
                       height={300} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{body}</p>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
