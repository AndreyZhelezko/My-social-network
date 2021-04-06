const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

const massageReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE :
            let newMessages = {
                id: 3,
                message: state.newMessage
            }
            state.massagesData.push(newMessages)
            state.newMessage = ''
            return state

        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newText
            return state

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