const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5,
                message: state.newMessage,
                likesCount: 0,
                disLikesCount: 0,
                src: `${window.location.origin}/images/default_ava.jpg`
            }
            state.postData.push(newPost)
            state.newMessage = ''
            return state

        case UPDATE_NEW_POST :
            state.newMessage = action.newText
            return state

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