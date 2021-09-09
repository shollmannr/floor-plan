import React from 'react';

const Bedroom = (props) => {
    return (
        <div className="bedroom" id={`bed-${props.bedNum}`}>
            Bedroom {props.bedNum !== null ? props.bedNum : 0} 
        </div>
    );
};

export default Bedroom;