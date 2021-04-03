import React from 'react';
import {NavLink} from "react-router-dom";
import modClass from "./DialogItem.module.css";

const DialogItem = (props) => {

    return (
        <li>
            <NavLink to={'/messages/' + props.id} activeClassName={modClass.active} className={modClass.dialog}>
                <span className={modClass.wrapper_logo}>
                    <img src={props.src} alt="logo"/>
                </span>
                {props.name}
            </NavLink>
        </li>
    )
}

export default DialogItem;