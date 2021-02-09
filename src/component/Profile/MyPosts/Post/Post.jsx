import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://demiart.ru/forum/uploads5/post-972170-1267183409.jpg' />
        {props.message}
      <div>
        <span>Like</span>
      </div>

    </div>
  )
}
export default Post;