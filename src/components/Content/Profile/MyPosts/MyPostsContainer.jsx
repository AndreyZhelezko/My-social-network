import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newMessage: state.profilePage.newMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (PostMessage) => {
            dispatch(updateNewPostActionCreator(PostMessage))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;