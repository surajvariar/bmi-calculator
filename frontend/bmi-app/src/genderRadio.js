import React, { useState } from 'react';
import { Row,Radio, VerticalSpacer } from '@cred/neopop-web/lib/components';
import { colorGuide } from '@cred/neopop-web/lib/primitives';

const GenderRadio = () => {
    const [selectedVal, setSelectedVal] = useState('');
    const handleChange = (e) => {
        console.log(e.target.value);
        setSelectedVal(e.target.value);
    };

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
                onChange={handleChange}
            />
            <VerticalSpacer n={7} />
            <Radio
                id="female"
                name="gender"
                value="female"
                label="Female"
                isChecked={selectedVal === 'female'}
                colorConfig={colorGuide.darkComponents.radio}
                onChange={handleChange}
            />
        </Row>
            
        </>
    );
};

export default GenderRadio;