import React from 'react';
import modClass from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts(props) {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 23, disLikesCount: 3},
        {id: 2, message: 'It is my first post', likesCount: 25, disLikesCount: 5},
    ]

    let posts = postData.map( post => <Post message={post.message} id={post.id} likesCount={post.likesCount} disLikesCount={post.disLikesCount}/>)

    return (
        <div className={modClass.wrapper}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>

            { posts }

        </div>
    );
}

export default MyPosts;