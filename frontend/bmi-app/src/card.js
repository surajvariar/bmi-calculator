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
    constructor(props) {
        super(props);
        this.state = {
            heightNotValid: true,
            weightNotValid: true,
            ageNotValid: true,
            genderNotValid: true,
            buttonDisabled: true,
        }
        this.checkHeightIsValid = this.checkHeightIsValid.bind(this);
        this.checkWieghtIsValid = this.checkWieghtIsValid.bind(this);
        this.checkGendertIsValid = this.checkGendertIsValid.bind(this);
        this.checkAgetIsValid = this.checkAgetIsValid.bind(this);
        this.checkButtonState = this.checkButtonState.bind(this);
    }

    checkHeightIsValid(height) {
        if (Number(height) > 0) {
            console.log("Inside if of check height state")
            this.setState({
                heightNotValid: false
            },
                () => {
                    this.checkButtonState();
                })
        }
        else {
            this.setState({
                heightNotValid: true
            },
                () => {
                    this.checkButtonState();
                })
        }

    }

    checkWieghtIsValid(weight) {
        if (weight > 0) {
            this.setState({
                weightNotValid: false
            },
                () => {
                    this.checkButtonState();
                })
        }
        else {
            this.setState({
                weightNotValid: true
            },
                () => {
                    this.checkButtonState();
                })
        }

    }

    checkAgetIsValid(age) {
        if (age !== 0 && age >= 20) {
            this.setState({
                ageNotValid: false
            },
                () => {
                    this.checkButtonState();
                })
        }
        else {
            this.setState({
                ageNotValid: true
            },
                () => {
                    this.checkButtonState();
                })
        }

    }

    checkGendertIsValid(gender) {
        console.log(gender)
        if (gender !== '') {
            this.setState({
                genderNotValid: false,

            },
                () => {
                    this.checkButtonState();
                }
            )
        }
        else {
            this.setState({
                genderNotValid: true
            },
                () => {
                    this.checkButtonState();
                })
        }

    }

    checkButtonState() {
        if (!this.state.heightNotValid && !this.state.weightNotValid && !this.state.ageNotValid && !this.state.genderNotValid) {
            this.setState({
                buttonDisabled: false
            })
        }
        else {
            this.setState({
                buttonDisabled: true
            })
        }
    }


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
                                onUpdate={this.props.onUpdateHeight}
                                checkIsValid={this.checkHeightIsValid}
                                textIsValid={this.state.heightNotValid}
                                errMsg="Please enter a valid height"
                            />
                        </div>
                        <HorizontalSpacer n={2} />
                        <div style={{ maxWidth: '100%' }}>
                            <TextField
                                label="Weight (in Kg)"
                                id="weight"
                                placeholder="Enter your weight"
                                onUpdate={this.props.onUpdateWeight}
                                checkIsValid={this.checkWieghtIsValid}
                                textIsValid={this.state.weightNotValid}
                                errMsg="Please enter a valid weight"
                            />
                        </div>
                        <HorizontalSpacer n={2} />
                        <div style={{ maxWidth: '100%' }}>
                            <TextField
                                label="Age"
                                id="age"
                                placeholder="Enter your Age"
                                onUpdate={this.props.onUpdateAge}
                                checkIsValid={this.checkAgetIsValid}
                                textIsValid={this.state.ageNotValid}
                                errMsg="Please enter a age (above 20)"
                            />
                        </div>

                        <HorizontalSpacer n={4} />
                        <div style={{ maxWidth: '50%' }}>
                            <GenderRadio
                                onUpdate={this.props.onUpdateGender}
                                checkIsValid={this.checkGendertIsValid}
                            />
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
                            disabled={this.state.buttonDisabled}
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