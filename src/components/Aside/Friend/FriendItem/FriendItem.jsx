import React from 'react';
import modClass from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <li className={modClass.friend}>
            <span className={modClass.wrapper_logo}>
                <img src={props.src} alt="logo"/>
            </span>
            {props.name}
        </li>
    );
};

export default FriendItem;