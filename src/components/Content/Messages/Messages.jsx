import React from 'react'
import modClass from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MassagesItem from "./MassagesItem/MassagesItem";


const Messages = () => {
	return (
		<div className={modClass.wrapper}>
			<ul className={modClass.dialogs_wrapper}>
				<DialogItem name='Dimych' id='1'/>
				<DialogItem name='Andrey' id='2'/>
				<DialogItem name='Sveta' id='3'/>
				<DialogItem name='Sasha' id='4'/>
				<DialogItem name='Viktor' id='5'/>
				<DialogItem name='Valera' id='6'/>
			</ul>
			<ul className={modClass.massages_wrapper}>
				<MassagesItem message='Hi'/>
				<MassagesItem message='How it your it-kamasutra'/>
				<MassagesItem message='Yo'/>
			</ul>
		</div>
	);
}

export default Messages;