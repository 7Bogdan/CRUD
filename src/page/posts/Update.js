import React, { useState } from "react";
import {setLocalStorage} from '../supporting/LocalStorage.js'
import {timeNow} from "../supporting/time.js";


function Update (props) {
  let post = props.post
  let [title, setTitle] = useState(post.title);
  let [url, setUrl] = useState(post.url);
  let [text, setText] = useState(post.text);
  let id = post.id;

  let updatePost= (id) => {
    props.endUpdate({id, title, url, text,creatAtTime:timeNow(),update:false})
    setLocalStorage(id, title, url, text)
  }

  return (
    <div className='post'>
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
        Photo:
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
      <button className ="update" onClick={() => updatePost(id)}>Update this post </button>
    </div>
  );
}

export default Update;
