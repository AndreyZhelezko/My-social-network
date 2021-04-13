import React from 'react'
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/massage-reducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
    let state = props.store.getState()

	let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (newMessage) => {
        props.store.dispatch(onMessageChangeActionCreator(newMessage))
    }

    return (
        <Messages addMessage={addMessage}
                  updateNewMessageText ={onMessageChange}
                  dialogsData={state.massagesPage.dialogsData}
                  massagesData={state.massagesPage.massagesData}
                  newMessage={state.massagesPage.newMessage}
        />
    );
}

export default MessagesContainer;