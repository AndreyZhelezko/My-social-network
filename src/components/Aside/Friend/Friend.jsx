import React from 'react';
import modClass from './Friend.module.css'
import FriendItem from "./FriendItem/FriendItem";


function Friend(props) {

    let FriendData = props.friendData.map( friend => <FriendItem key={friend.id} name={friend.name} src={friend.src} /> )

    return (
        <div className={modClass.wrapper}>
            <h3>Friends</h3>
            <ul className={modClass.friend_block}>
                { FriendData }
            </ul>
        </div>
    );
}

export default Friend;