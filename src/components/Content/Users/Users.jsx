import React from 'react';
import modClass from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: `${window.location.origin}/images/ava1.jpg`,
                followed: false,
                fullName: 'Dmitry',
                status: 'I am learn React',
                location: {city: 'Minsk', country: 'Belorus'}
            },
            {
                id: 2,
                photoUrl: `${window.location.origin}/images/ava2.jpg`,
                followed: true,
                fullName: 'Vasya',
                status: 'I am learn React2',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: `${window.location.origin}/images/ava3.jpg`,
                followed: false,
                fullName: 'Grisha',
                status: 'I am learn React3',
                location: {city: 'Tegusigal\'pa', country: 'Honduras'}
            }
        ])

    }

    return (
        <div className={modClass.wrapper}>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id} className={modClass.wrapper_user}>
                            <div className={modClass.user_avatarWr}>
                                <div className={modClass.user_avatar}>
                                    <img src={user.photoUrl} alt="avatar"/>
                                </div>
                                <div className={modClass.user_followed}>
                                    {
                                        user.followed
                                            ? <button onClick={() => props.toggleFollow(user.id)}>unfollow</button>
                                            : <button onClick={() => props.toggleFollow(user.id)}>follow</button>
                                    }
                                </div>
                            </div>
                            <ul className={modClass.user_info}>
                                <li>{user.fullName}</li>
                                <li>{user.status}</li>
                                <li>{user.location.country}</li>
                                <li>{user.location.city}</li>
                            </ul>

                        </div>
                    )
                })
            }
        </div>
    )
};

export default Users;