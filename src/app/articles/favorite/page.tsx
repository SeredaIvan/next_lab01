import FavouriteArticles from "@/components/FavouriteArticles/FavouriteArticles";
import { Suspense } from "react";

export default function Page() {
    const idsPosts = [2, 4, 5, 3];

    return (
        <>
            {idsPosts.map((id) => (
                <Suspense key={id} fallback={<p>Loading post...</p>}>
                    <FavouriteArticles id={id} />
                </Suspense>
            ))}
        </>
    );
}
