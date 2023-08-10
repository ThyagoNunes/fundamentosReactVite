import { useState } from "react";

import { Post } from "./Post";
import { Header } from "./Header";
import { Button } from "./Button";


export function App() {
  const [posts, setPosts] = useState([]);

  function handleInsertPost() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Number(`${Math.random()}`),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Subtitle#0${prevState.length + 1}`,
        likes: 0,
        read: false,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }

  function handleMarkPostAsRead(postId) {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, read: !post.read } : { ...post }
      )
    );
  }
  console.log();

  return (
    <>
      <div className="flex flex-col">
        
        <Header title="Dick Chamaleon Blog">Just for fun </Header>
        <Button onClick={handleInsertPost}>Adicionar</Button>
      </div>

      {posts.map((post) => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          onRead={handleMarkPostAsRead}
          post={post}
        />
      ))}
    </>
  );
}
