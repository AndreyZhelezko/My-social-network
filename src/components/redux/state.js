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
    rerender(Rendering) {
        this._callSubscriber = Rendering
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newMessage,
                likesCount: 0,
                disLikesCount: 0,
                src: `${window.location.origin}/images/default_ava.jpg`
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newMessage = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === 'ADD-MESSAGE') {
            let newMessages = {
                id: 3,
                message: this._state.massagesPage.newMessage
            }
            this._state.massagesPage.massagesData.push(newMessages)
            this._state.massagesPage.newMessage = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === 'UPDATE-NEW-POST') {
            this._state.profilePage.newMessage = action.newText
            this._callSubscriber(this._state)
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.massagesPage.newMessage = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export default store
window.store = store