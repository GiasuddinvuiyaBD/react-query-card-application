import { useMutation, useQueryClient } from "@tanstack/react-query"
import PostForm from "./PostForm";
import { createPost } from "../api/posts";
import {v4 as uuidv4} from 'uuid'

function AddPost()
{

  const queryClient = useQueryClient(); 

  const createPostMotation = useMutation({
    mutationFn : createPost,
    onSuccess : () => {
      queryClient.invalidateQueries({queryKey : ["posts"]}); 
      // console.log('successfully added')
    }
  }); 

  const handleAppPost = (post) => 
  {
    createPostMotation.mutate({
      id : uuidv4(),
      ...post
    })
  }

    return(
       <>
         <h2>Add Post</h2>
         <PostForm onSubmit={handleAppPost} initalValue={{}} />
       </>
    )
}
export default AddPost