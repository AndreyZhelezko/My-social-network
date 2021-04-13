import React from 'react'
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/massage-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogsData: state.massagesPage.dialogsData,
        massagesData: state.massagesPage.massagesData,
        newMessage: state.massagesPage.newMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText : (newMessage) => {
            dispatch(onMessageChangeActionCreator(newMessage))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;