import React, { useState } from "react";
import idMax from "../supporting/idMax.js";
import { setLocalStorage } from "../supporting/LocalStorage.js";

function Storage() {
  let [title, setTitle] = useState("");
  let [url, setUrl] = useState("");
  let [text, setText] = useState("");
  let id = idMax();

  let savePost = () => {
    setLocalStorage(id, title, url, text);
    setTitle("");
    setUrl("");
    setText("");
  };

  return (
    <div className="save-post">
      <h2>Hello,let's save a post</h2>
      <p>
        Heading:
        <input
          placeholder="What heading?"
          value={title}
          name="title"
          onChange={(event) => setTitle(event.target.value)}
        />
      </p>
      <p>
        Photo URL:
        <input
          placeholder="What photo?"
          value={url}
          name="url"
          onChange={(event) => setUrl(event.target.value)}
        />
      </p>
      <p>
        Post:
        <textarea
          placeholder="What is the text?"
          value={text}
          name="text"
          onChange={(event) => setText(event.target.value)}
        ></textarea>
      </p>

      <button onClick={() => savePost()}>
        Save post
      </button>
    </div>
  );
}

export default Storage;
