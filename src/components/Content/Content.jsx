import React from 'react';
import { Route } from 'react-router-dom';
import modClass from './Content.module.css';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import MessagesContainer from "./Messages/MessagesContainer";


const Content = () => {
	return (
		<div className={modClass.wrapper}>
			<Route exact path='/' render={ ()=> <Profile /> } />
			<Route path='/messages' render={ ()=> <MessagesContainer /> } />
			<Route path='/news' render={ ()=> <News /> } />
			<Route path='/music' render={ ()=> <Music /> } />
			<Route path='/settings' render={ ()=> <Settings /> } />
		</div>
	);
}

export default Content;