import {
    ElevatedCard,
    Column,
    Row,
    Typography,
    HorizontalSpacer,
    Button,
} from '@cred/neopop-web/lib/components';
import {
    mainColors,
    fontNameSpaces,
} from '@cred/neopop-web/lib/primitives';
import React from 'react';
import styled from 'styled-components';
import GenderRadio from './genderRadio';
import TextField from './textField';


const ContentWrapper = styled.div`
    padding: 20px;
`;



class Card extends React.Component {
    render() {
        return (
            <ElevatedCard
                backgroundColor="#327ba8"
                edgeColors={{
                    bottom: '#328ca8',
                    right: '#328ca8',
                }}
                style={{
                    width: '330px',
                }}
            >
                <ContentWrapper>
                    <Column>
                        <Row className="v-justify">
                            <div>
                                <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
                                    BMI Calculator
                                </Typography>
                            </div>
                        </Row>
                        <HorizontalSpacer n={4} />
                        <div style={{ maxWidth: '100%' }}>
                            <TextField
                                label="Height (in Cm)"
                                id="height"
                                placeholder="Enter your height"
                                onUpdate={this.props.onUpdateHeight} />
                        </div>
                        <HorizontalSpacer n={2} />
                        <div style={{ maxWidth: '100%' }}>
                            <TextField
                                label="Weight (in Kg)"
                                id="weight"
                                placeholder="Enter your weight"
                                onUpdate={this.props.onUpdateWeight} />
                        </div>
                        <HorizontalSpacer n={2} />
                        <div style={{ maxWidth: '100%' }}>
                            <TextField
                                label="Age"
                                id="age"
                                placeholder="Enter your Age"
                                onUpdate={this.props.onUpdateAge} />
                        </div>

                        <HorizontalSpacer n={4} />
                        <div style={{ maxWidth: '50%' }}>
                            <GenderRadio onUpdate={this.props.onUpdateGender} />
                        </div>

                        <HorizontalSpacer n={4} />
                        <Button
                            variant="primary"
                            fullWidth={true}
                            onClick={() => {
                                this.props.onCalculateBMI();
                            }}
                            colorMode="dark"
                            kind="elevated"

                        >
                            Calculate BMI
                        </Button>
                    </Column>
                </ContentWrapper>
            </ElevatedCard>
        );
    }

}

export default Card;