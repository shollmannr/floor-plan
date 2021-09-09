import React from 'react';

import Oven from '../items/Oven'
import Sink from '../items/Sink'

const Kitchen = () => {
    return (
        <div id="kitchen">
            <div id="appliances">
                <Oven />
                <Sink />
            </div>

            Kitchen
        </div>
    );
};

export default Kitchen;