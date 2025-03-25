import {Post,Comment} from "@/types/types";

export async function fetchPosts() : Promise<Post[]> {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            return data as Post[];
        })
        .catch((error) => {
            console.error(`Error fetching posts: ${error}`);
            return [];
        });
}
export async function fetchOnePost(id:number) :Promise<Post> {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log('Fetching Data'+`https://jsonplaceholder.typicode.com/posts/${id}`)
            return data as Post;
        })

}
export async function fetchComentsByPostId(id: number): Promise<Comment[]> {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const data:Comment[] = await response.json();
        return data as Comment[];

    } catch (error) {
        console.error(`Error fetching comments: ${error}`);
        return [];
    }
}

