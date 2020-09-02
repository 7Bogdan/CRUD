import React,{useState} from 'react'
import Editing from './Editing'

function Page (props){

 function update(id){
    let copyPost = JSON.parse(localStorage.getItem(id))
    copyPost.editing = !copyPost.editing
    localStorage.setItem(id,JSON.stringify(copyPost))
    props.getPost();
  }

  function deletePost (id){
  props.posts.filter(post=> post.id !== id);
  localStorage.removeItem(id);
  props.getPost();
}

  function renderPost(post){
    if(post.editing === true){
        return(
         <div key ={post.id} className= 'Post' index={post.id}>
          <Editing copyPost={post} getPost={props.getPost}/>
         </div>
        )
      }else{
        return redaction(post)
      }
    }

  function redaction(post){
    return(
     <div key ={post.id} className= 'Post' index={post.id}>
      <h2>{post.title}</h2>
      <h3>{post.creatAt}</h3>
      <h3>Time: {post.creatAtTime.slice(-8)} </h3>
      <h4>Date: {post.creatAtTime.slice(0,8)} </h4>
      <img src={post.url}/>
      <div>{post.text}</div>
      <button onClick={()=>deletePost(post.id)} >Dlete this {post.title} </button>
      <button onClick={()=>update(post.id)} >Update this{post.title} </button>

     </div>)
   }
   return(
   <div id ="Posts" >
    {props.posts.map((post) => renderPost(post))}
   </div>
  )

}


export default Page;
