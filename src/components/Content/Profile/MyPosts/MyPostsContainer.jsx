import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (PostMessage) => {
        props.store.dispatch(updateNewPostActionCreator(PostMessage))
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 postData={state.profilePage.postData}
                 newMessage={state.profilePage.newMessage}
        />
    );
}

export default MyPostsContainer;