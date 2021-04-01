import React from 'react'
import modClass from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MassagesItem from "./MassagesItem/MassagesItem";


const Messages = () => {
    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]

    let massagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How it your it-kamasutra'},
        {id: 3, message: 'Yo'}
    ]

	let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> )
	let massagesElements = massagesData.map( massages => <MassagesItem message={massages.message} id={massages.id} /> )

    return (
        <div className={modClass.wrapper}>
            <ul className={modClass.dialogs_wrapper}>
				{ dialogsElements }
            </ul>
            <ul className={modClass.massages_wrapper}>
				{ massagesElements }
            </ul>
        </div>
    );
}

export default Messages;