import React from 'react';

const Bath = (props) => {
    return (
        <div id={props.size === "Full" ? "full-bath" : "half-bath"}>
            {props.size !== null ? props.size : "Full"} Bath 
        </div>
    );
};

export default Bath