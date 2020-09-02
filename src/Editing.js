import React,{useState} from 'react'

function Editing (props) {

          const id = props.copyPost.id;
          const[title, setTitle] = useState(props.copyPost.title);
          const[url, setUrl] = useState(props.copyPost.url);
          const[text, setText] = useState(props.copyPost.text);
          const creatAtTime = new Date().toLocaleString();
          const editing = false;

  function update(){
      localStorage.setItem(id,JSON.stringify({id,title,url,text,creatAtTime,editing}))
      props.getPost()
    }

      return(
        <div>
          <p>Heading:<input placeholder ='What heading?' value={title} name="title" onChange={event=>setTitle(event.target.value)} /></p>
          <p>Photo:<input placeholder ='What photo?' value={url} name="url" onChange={event=>setUrl(event.target.value)}/></p>
          <p>Post:<textarea placeholder = "What is the text?" value={text} name="text" onChange={event=>setText(event.target.value)}></textarea></p>
             <button onClick={()=>update()} >Update this post </button>
          </div>
        )
}

  export default Editing
