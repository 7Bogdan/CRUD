import React from "react";

let Post = (props) => {
  let post = props.post;
    let id = props.post.id;
  return (
    <div  key={id} className="post" index={id}>
      <h2 className='title'>{post.title}</h2>
      <h3>{post.creatAt}</h3>
      <h3>Time: {post.creatAtTime.slice(-8)} </h3>
      <h4>Date: {post.creatAtTime.slice(0, 8)} </h4>
      <img src={post.url} />
      <div>{post.text}</div>
      <button className ="delete"onClick={()=> props.deletePost(id)}>
        Dlete this {post.title}.
      </button>
      <button className ="update"onClick={() => props.startUpdate(id)}>
        Update this {post.title}.
      </button>
    </div>
  );
};

export default Post;
