import React from 'react';
import modClass from './Post.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import images from './../../../../../images/default_ava.jpg'

function Post(props) {
    return (
        <div className={modClass.wrapper}>
            <div className={modClass.item}>
                <div className={modClass.avatar}>
                    <img src={images} alt="avatar" />
                </div>
                { props.message }
            </div>

            <div className={modClass.liking}>
                <span className={`${modClass.like}`}>
                    <FontAwesomeIcon icon={['fas', 'thumbs-up']} />
                    <i>{props.likesCount}</i>
                </span>
                <span className={modClass.dislike}>
                    <FontAwesomeIcon icon={['fas', 'thumbs-down']} />
                    <i>{props.disLikesCount}</i>
                </span>
            </div>

        </div>
    );
}

export default Post;