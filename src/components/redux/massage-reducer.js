const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState = {
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

const massageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE :
            let newMessages = {
                id: 3,
                message: state.newMessage
            }
            return {
                ...state,
                massagesData: [...state.massagesData, newMessages],
                newMessage: ''
            }

        case UPDATE_NEW_MESSAGE: {
            return {
                ...state,
                newMessage: action.newText
            }
        }

        default:
            return state

    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const onMessageChangeActionCreator = (newMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newText: newMessage
    }
}

export default massageReducer