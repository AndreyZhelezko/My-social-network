let TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
let SET_USERS = 'SET-USERS'

let initialState = {
    users: [ ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {
                            ...users,
                            followed: !users.followed
                        }
                    }
                    return users
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }


        default:
            return state
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
}

export  const toggleFollowAC = (userId) => {
    return {
        type: TOGGLE_FOLLOW, userId
    }
}

export default usersReducer;