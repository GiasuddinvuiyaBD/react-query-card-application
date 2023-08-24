import { useQuery } from "@tanstack/react-query";
import AddPost from "./component/AddPost"; 
import { fetchPosts } from "./api/posts";
import { useNavigate } from "react-router-dom";

function PostList()
{
    const navigate = useNavigate()
    // were getting data form json
    const {isLoading, data : posts, isError, error,} = useQuery({
        queryKey : ["posts"],
        queryFn : fetchPosts
    }); 
    
    // 
    if(isLoading) return <h2>loding...</h2>
    if(isError) return <h2>{error.message}</h2>

    return(
        <>
            <AddPost />
            {
                posts.map((post) => 
                {
                    return <div key={post.id} style={{background : '#777'}}>
                        <h4 style={{cursor:"pointer"}} onClick={() => navigate(`post/${post.id}`)}>{post.title}</h4>
                        <button onClick={() => navigate(`post/${post.id}/edit`)}>Edit</button>
                        <button>Delete</button>
                    </div>
                })
            }
        </>
    )
}

export default PostList