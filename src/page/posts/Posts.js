import React, { useState } from "react";
import Update from "./Update";
import Post from "./Post";
import { deleteLocalPost, getLocalPosts } from "../supporting/LocalStorage.js";

function Posts(props) {
  let [infoPosts, setInfoPosts] = useState([]);
  let [sort, setSort] = useState(false);

  let getPosts = () => {
    let interimPosts = getLocalPosts();
    setInfoPosts(interimPosts);
  };

  let sortPost = () => {
    let interimPosts = infoPosts;
    sort === true
      ? interimPosts.sort((a, b) => (a.creatAtTime > b.creatAtTime ? 1 : -1))
      : interimPosts.reverse();
    setSort(!sort);
    setInfoPosts(interimPosts);
  };

  let deletePost = (id) => {
    let interimPosts = infoPosts.filter((post) => post.id !== id);
    setInfoPosts(interimPosts);
    deleteLocalPost(id);
  };

  let startUpdate = (id) => {
    let interimPosts = infoPosts.slice();
    interimPosts.map((post) =>
      post.id === id
        ? (post.update = !post.update)
        : null
    );
    setInfoPosts(interimPosts);
  };

  let endUpdate = (newPost) => {
    let interimPosts = infoPosts.map((post) => {
      if (post.id === newPost.id) {
        return newPost;
      }
      return post;
    });
    setInfoPosts(interimPosts);
  };

  return (
    <div className="posts">
      <div className="get-posts">
        <button className="get-post" onClick={() => getPosts()}>Get post from local storage</button>
        <button className="sort-post"onClick={() => sortPost()}>Sort by time &#8645;</button>
      </div>
      {infoPosts.map((post) =>
        post.update === true ? (
          <Update key={post.id} post={post} endUpdate={endUpdate} />
        ) : (
          <Post
            key={post.id}
            post={post}
            deletePost={deletePost}
            startUpdate={startUpdate}
          />
        )
      )}
    </div>
  );
}

export default Posts;
