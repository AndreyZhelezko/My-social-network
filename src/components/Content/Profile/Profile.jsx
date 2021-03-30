import React from 'react';
import modClass from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
	return (
		<div className={modClass.wrapper}>
			<MyPosts />
		</div>
	);
}

export default Profile;