import React from 'react';
import modClass from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
	return (
		<div className={modClass.wrapper}>
			<ProfileInfo />
			<MyPostsContainer
				store={props.store}
			/>
		</div>
	);
}

export default Profile;