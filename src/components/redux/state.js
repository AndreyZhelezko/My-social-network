let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newMessage,
        likesCount: 0,
        disLikesCount: 0,
        src: `${window.location.origin}/images/default_ava.jpg`
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newMessage = ''
    rerenderEntireTree(state)
}

export let updateNewPost = (newText) => {
    state.profilePage.newMessage = newText
    rerenderEntireTree(state)
}

export let addMessage = () => {
    let newMessages = {
        id: 3,
        message: state.massagesPage.newMessage
    }
    state.massagesPage.massagesData.push(newMessages)
    state.massagesPage.newMessage = ''
    rerenderEntireTree(state)
}

export let updateNewMessage = (newText) => {
    state.massagesPage.newMessage = newText
    rerenderEntireTree(state)
}

let rerenderEntireTree = () => {
    console.log('rerender page')
}

export const rerender = (Rendering) => {
    rerenderEntireTree = Rendering
}

export default state