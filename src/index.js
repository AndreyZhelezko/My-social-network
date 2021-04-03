import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {rerender} from "./components/redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost,addMessage, updateNewPost, updateNewMessage} from "./components/redux/state";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    addMessage={addMessage}
                    updateNewPost={updateNewPost}
                    updateNewMessage={updateNewMessage}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

rerender(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
