import React from 'react';
import modClass from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts(props) {
    return (
        <div className={modClass.wrapper}>
            MyPosts
            <Post message={'Hi, how are you?'} likesCount={23} disLikesCount={3}/>
            <Post message={'It is my first post'} likesCount={25} disLikesCount={5} />
        </div>
    );
}

export default MyPosts;