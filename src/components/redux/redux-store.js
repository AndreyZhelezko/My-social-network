import {combineReducers} from "redux";
import headerReducer from "./header-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import massageReducer from "./massage-reducer";
import usersReducer from "./users-reducer";

const {createStore} = require("redux");

let reducers = combineReducers({
    header: headerReducer,
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    massagesPage: massageReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);


export default store