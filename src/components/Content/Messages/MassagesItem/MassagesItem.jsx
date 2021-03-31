import React from 'react';
import modClass from './MassagesItem.module.css';

function MassagesItem(props) {
    return (
        <li className={modClass.massage}>
            {props.message}
        </li>
    );
}

export default MassagesItem;