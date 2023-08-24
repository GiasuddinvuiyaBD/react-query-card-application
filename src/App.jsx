import { Routes,Route } from "react-router"
import PostList from "./PostLists";
import Post from "./Post";
import EditPost from "./EiditPost";
function App() {

  return (
    <>
      <h2>Awsome Chat Group</h2>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
      </Routes>
    </>
  )
}

export default App
