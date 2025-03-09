export async function fetchPosts() :Promise<any> {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(`Error fetching posts: ${error}`);
            return [];
        });
}
export async function fetchOnePost(id:number) :Promise<any> {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(`Error fetching posts: ${error}`);
            return [];
        });
}

