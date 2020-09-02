import React,{useState} from 'react'
import Page from './Page'

function App (){

  const id = idMax();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const creatAtTime = new Date().toLocaleString();
  const editing = false;
  const [posts,setPosts] = useState ([]);
  const [course, setCourse]= useState(true);

  function idMax (){
    let id = [];
    for (let i = 0; i < localStorage.length; i++) {
      id.push(Number(localStorage.key(i)))
    };
    let idMaxLocal = Math.max(...id);
    return (idMaxLocal === -Infinity) ? 1 : idMaxLocal + 1
  }

  function savePost (){
    localStorage.setItem(id,JSON.stringify({id,title,url,text,creatAtTime,editing}))
     setTitle('')
     setUrl('')
     setText('')
  }

  function getPost (){
    let posts =[];
    for (let i = 0, length = localStorage.length; i < length; i++) {
      posts.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    setPosts(posts);
  }

  function sortPost(){
   (course===true) ?
   posts.sort((a, b) => a.creatAtTime > b.creatAtTime ? 1 : -1) :
   posts.reverse();
   setCourse(!course);
    }

  return(
    <div>
      <div id="head">
       <h2>Hello,let's make a post</h2>
       <p>Heading:<input placeholder ='What heading?' value={title} name="title" onChange={event=>setTitle(event.target.value)} /></p>
       <p>Photo URL: <input placeholder ='What photo?' value={url} name="url" onChange={event=>setUrl(event.target.value)}/></p>
       <p>Post:<textarea placeholder = "What is the text?" value={text} name="text" onChange={event=>setText(event.target.value)}></textarea></p>

       <button id='save' onClick={savePost}>Send post</button>
       <button id='publish' onClick={getPost}>Create post</button>
       <button id ='sortPost' onClick={sortPost}>Sort by time &#8645;</button>

      </div>
        <Page posts={posts}
              getPost={getPost}/>
    </div>
  )
}
console.log("Yes")
export default App;
