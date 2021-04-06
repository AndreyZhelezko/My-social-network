import profileReducer from "./profile-reducer";
import massageReducer from "./massage-reducer";
import headerReducer from "./header-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        header: {
            logo_src: `${window.location.origin}/images/logo.png`
        },
        sidebar: {
            friendData: [
                {id: 1, name: 'Dimych', src: `${window.location.origin}/images/ava1.jpg`},
                {id: 2, name: 'Andrey', src: `${window.location.origin}/images/ava2.jpg`},
                {id: 3, name: 'Sveta', src: `${window.location.origin}/images/ava3.jpg`}
            ]
        },
        profilePage: {
            postData: [
                {
                    id: 1,
                    message: 'Hi, how are you?',
                    likesCount: 23,
                    disLikesCount: 3,
                    src: `${window.location.origin}/images/default_ava.jpg`
                },
                {
                    id: 2,
                    message: 'It is my first post',
                    likesCount: 25,
                    disLikesCount: 5,
                    src: `${window.location.origin}/images/default_ava.jpg`
                }
            ],
            newMessage: ''
        },
        massagesPage: {
            dialogsData: [
                {id: 1, name: 'Dimych', src: `${window.location.origin}/images/ava1.jpg`},
                {id: 2, name: 'Andrey', src: `${window.location.origin}/images/ava2.jpg`},
                {id: 3, name: 'Sveta', src: `${window.location.origin}/images/ava3.jpg`},
                {id: 4, name: 'Sasha', src: `${window.location.origin}/images/ava4.jpg`},
                {id: 5, name: 'Viktor', src: `${window.location.origin}/images/ava5.jpg`},
                {id: 6, name: 'Valera', src: `${window.location.origin}/images/ava6.jpg`}
            ],
            massagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How it your it-kamasutra'},
                {id: 3, message: 'Yo'}
            ],
            newMessage: ''
        }
    },
    _callSubscriber() {
        console.log('rerender page')
    },

    getState () {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.header = headerReducer(this._state.header, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.massagesPage = massageReducer(this._state.massagesPage, action);

        this._callSubscriber(this._state)
    }
}

export default store
window.store = store