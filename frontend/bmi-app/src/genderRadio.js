import React, { useState } from 'react';
import { Row,Radio, VerticalSpacer } from '@cred/neopop-web/lib/components';
import { colorGuide } from '@cred/neopop-web/lib/primitives';

function GenderRadio(props){
    const [selectedVal, setSelectedVal] = useState('');
    const setVal=(value)=>{
        setSelectedVal(value);
    }
    return (
        <>
        <Row>
        <Radio
                id="male"
                name="gender"
                value="male"
                label="Male"
                isChecked={selectedVal === 'male'}
                colorConfig={colorGuide.darkComponents.radio}
                onChange={(e)=>{props.onUpdate(e.target.value); setVal(e.target.value);}}
            />
            <VerticalSpacer n={7} />
            <Radio
                id="female"
                name="gender"
                value="female"
                label="Female"
                isChecked={selectedVal === 'female'}
                colorConfig={colorGuide.darkComponents.radio}
                onChange={(e)=>{props.onUpdate(e.target.value); setVal(e.target.value);}}
            />
        </Row>
            
        </>
    );
};

export default GenderRadio;