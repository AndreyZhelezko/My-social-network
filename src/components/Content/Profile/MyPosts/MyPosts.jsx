import React from 'react';
import modClass from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let PostMessage = newPostElement.current.value
        props.updateNewPostText(PostMessage)
    }

    let posts = props.postData.map(post => {
        return (
            <Post message={post.message}
                  key={post.id}
                  likesCount={post.likesCount}
                  disLikesCount={post.disLikesCount}
                  src={post.src}/>
        )
    })

    return (
        <div className={modClass.wrapper}>
            <h3>MyPosts</h3>
            <div>
                <div className={modClass.textarea_wrapper}>
                    <textarea ref={newPostElement} className={modClass.textarea} onChange={onPostChange}
                              value={props.newMessage}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>

            {posts}

        </div>
    );
}

export default MyPosts;