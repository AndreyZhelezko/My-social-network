const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5,
                message: state.newMessage,
                likesCount: 0,
                disLikesCount: 0,
                src: `${window.location.origin}/images/default_ava.jpg`
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newMessage: ''
            }


        case UPDATE_NEW_POST : {
            return {
                ...state,
                newMessage: action.newText
            }
        }

        default :
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostActionCreator = (PostMessage) => {
    return {
        type: UPDATE_NEW_POST,
        newText: PostMessage
    }
}

export default profileReducer