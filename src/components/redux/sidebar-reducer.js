let initialStore = {
    friendData: [
        {id: 1, name: 'Dimych', src: `${window.location.origin}/images/ava1.jpg`},
        {id: 2, name: 'Andrey', src: `${window.location.origin}/images/ava2.jpg`},
        {id: 3, name: 'Sveta', src: `${window.location.origin}/images/ava3.jpg`}
    ]
}

const sidebarReducer = (state = initialStore, action) => {


    return state
}

export default sidebarReducer