import React from 'react';
import {NavLink} from "react-router-dom";
import modClass from "./DialogItem.module.css";

const DialogItem = (props) => {
    return (
        <li>
            <NavLink to={'/messages/' + props.id} activeClassName={modClass.active} className={modClass.dialog}>
                {props.name}
            </NavLink>
        </li>
    )
}

export default DialogItem;