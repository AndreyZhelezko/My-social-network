import React from 'react';
import modClass from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {
	return (
		<div className={modClass.wrapper}>
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	);
}

export default Profile;