import React, { useState } from "react";
import Update from "./Update";
import Create from "./Create";
import {
  updateLocalPost,
  deleteLocalPost,
  getLocalPosts,
} from "../supporting/LocalStorage.js";

function Posts(props) {
  let [infoPosts, setInfoPosts] = useState([]);
  let [sort, setSort] = useState(false);


  let getPosts = () => {
    let interimPosts = getLocalPosts();
    setInfoPosts(interimPosts);
  };

  let deletePost = (id) => {
    deleteLocalPost(id);
    let interimPosts = getLocalPosts();
    setInfoPosts(interimPosts);
  };

  let updatePost = (id) => {
    let interimPosts = getLocalPosts();
    interimPosts.map((post) =>
      post.id === id ? (post.update = !post.update) : null
    );
    setInfoPosts(interimPosts);
    updateLocalPost(id);
  };

  let sortPost = () => {
    let interimPosts = infoPosts;
    sort === true
      ? interimPosts.sort((a, b) => (a.creatAtTime > b.creatAtTime ? 1 : -1))
      : interimPosts.reverse();
    setSort(!sort);
    setInfoPosts(interimPosts);
  };

  return (
    <div className="posts">
      <div className="get-posts">
        <button onClick={() => getPosts()}>
          Create post
        </button>
        <button onClick={() => sortPost()}>
          Sort by time &#8645;
        </button>
      </div>
      {infoPosts.map((post) =>
        post.update === true ? (
          <Update key={post.id} post={post}  update={updatePost}/>
        ) : (
          <Create key={post.id} post={post} delete={deletePost} update={updatePost} />
        )
      )}
    </div>
  );
}

export default Posts;
