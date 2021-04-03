import React from 'react'
import modClass from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MassagesItem from "./MassagesItem/MassagesItem";


const Messages = (props) => {
	let dialogsElements = props.massagesPage.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} src={dialog.src} /> )
	let massagesElements = props.massagesPage.massagesData.map( massages => <MassagesItem message={massages.message} key={massages.id}  /> )

    let newMessageElement = React.createRef();

	let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = ( () => {
        let newMessage = newMessageElement.current.value;
        props.updateNewMessage(newMessage)
    })

    return (
        <div className={modClass.wrapper}>
            <ul className={modClass.dialogs_wrapper}>
				{ dialogsElements }
            </ul>
            <div className={modClass.massages_wrapper}>
                <ul>
                    { massagesElements }
                </ul>
                <div className={modClass.textarea_wrapper}>
                    <textarea ref={newMessageElement} onChange={onMessageChange} value={props.massagesPage.newMessage} className={modClass.textarea}/>
                </div>
                <div>
                    <button onClick={ addMessage }>Add Post</button>
                </div>
            </div>

        </div>
    );
}

export default Messages;