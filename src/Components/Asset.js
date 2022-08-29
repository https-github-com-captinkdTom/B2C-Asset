import React from 'react';

function Asset(props) {
    return (
        <li className="asset-list">
            <h2>{props.name}</h2>
            <h3>{props.type}</h3>
            <h3>{props.id}</h3>
            <p>{props.person.email}</p>
        </li>
    );
}

export default Asset;