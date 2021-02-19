import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  
 let postsElements=props.posts.map(p=><Post message={p.message} likesCount={p.likesCount} />);

 let addPost = ()=> {
   alert('Huuuii');
 }
  return (
  <div>
    My posts
      <div>
        <textarea></textarea>
        <button onClick = {addPost}>Add post</button>
      News post
    </div>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>
  )
}
export default MyPosts;