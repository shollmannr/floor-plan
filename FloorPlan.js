import React from 'react';

import Bath from './rooms/Bath';
import Bedroom from './rooms/Bedroom';
import Kitchen from './rooms/Kitchen';
import LivingRoom from './rooms/LivingRoom';

const FloorPlan = () => {
    return (
        <div id="floor-plan">
            <Kitchen />
            <LivingRoom />
            <Bedroom bedNum={3}/>
            <Bath size="Full"/>
            <Bedroom bedNum={1}/>
            <Bedroom bedNum={2}/>
            <Bath size="Half"/>
        </div>
    );
};

export default FloorPlan;