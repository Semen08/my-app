import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return <div>

    <div>
      <img src='https://lifeboat.com/blog.images/the-acceleration-of-acceleration-how-the-future-is-arriving-far-faster-than-expected.jpg' />
    </div>
    <div>
      avatar
    </div>
    <MyPosts/>


  </div>
}
export default Profile;