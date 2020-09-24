import React from "react";

let Create = (props) => {
  let post = props.post;
  return (
    <div  key={post.id} className="post" index={post.id}>
      <h2>{post.title}</h2>
      <h3>{post.creatAt}</h3>
      <h3>Time: {post.creatAtTime.slice(-8)} </h3>
      <h4>Date: {post.creatAtTime.slice(0, 8)} </h4>
      <img src={post.url} />
      <div>{post.text}</div>
      <button onClick={()=> props.delete(post.id)}>
        Dlete this {post.title}.
      </button>
      <button onClick={() => props.update(post.id)}>
        Update this{post.title}.
      </button>
    </div>
  );
};

export default Create;
