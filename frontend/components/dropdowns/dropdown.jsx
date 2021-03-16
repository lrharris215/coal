import React from 'react';

export default (props) => {
    return (
        <div className={props.klassName}>
            <ul>
                {props.listItems.map((item) => {
                    return (
                        <li>{item}</li>
                    )
                    })
                }
            </ul>
        </div>
    )
}