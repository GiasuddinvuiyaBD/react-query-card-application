// for getting data
export async function fetchPosts()
{
    const response = await fetch('http://localhost:3000/posts');
    return response.json()
}

// posting data 
export async function fetchPost(id)
{
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    return response.json()
}
// creat post
export async function createPost(newPost)
{
    const response = await fetch(`http://localhost:3000/posts`, {
        method : "POST",
        headers : {
            "Content-Type" : "Application/json"
        },
        body : JSON.stringify(newPost)
    });
    return response.json()
}