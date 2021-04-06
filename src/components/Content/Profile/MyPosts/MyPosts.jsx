import React from 'react';
import modClass from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = ( () => {
        let PostMessage = newPostElement.current.value
        props.dispatch(updateNewPostActionCreator(PostMessage))
    })

    let posts = props.postData.map( post => <Post message={post.message} key={post.id} likesCount={post.likesCount} disLikesCount={post.disLikesCount} src={post.src}/>)

    return (
        <div className={modClass.wrapper}>
            <h3>MyPosts</h3>
            <div>
                <div className={modClass.textarea_wrapper}>
                    <textarea ref={newPostElement} className={modClass.textarea} onChange={onPostChange} value={props.newMessage} />
                </div>
                <div>
                    <button onClick={ addPost }>Add Post</button>
                </div>
            </div>

            { posts }

        </div>
    );
}

export default MyPosts;