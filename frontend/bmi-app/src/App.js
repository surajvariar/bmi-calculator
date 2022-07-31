import './App.css';
import {
  ElevatedCard,
  Column,
  Row,
  Typography,
  HorizontalSpacer,
  Button,
  InputField,
} from '@cred/neopop-web/lib/components';
import {
  mainColors,
  fontNameSpaces,
  getButtonConfig,
} from '@cred/neopop-web/lib/primitives';
import styled from 'styled-components';
import React from 'react';
import GenderRadio from './genderRadio';

const ContentWrapper = styled.div`
    padding: 20px;
`;


class BMI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      weight: '',
    }
    this.updateHeight = this.updateHeight.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
  }
  updateHeight(height) {
    console.log("Height ", height);
    this.setState({
      height: height
    });
  }

  updateWeight(weight) {
    console.log("Weight ", weight);
    this.setState({
      weight: weight
    });
  }
  render() {
    return (
      <App onUpdateHeight={this.updateHeight} onUpdateWeight={this.updateWeight} />
    )
  }
}

function App(props) {
  
  return (
    <div className="centered" style={{
      paddingTop: '100px',
    }}>
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
              <InputField
                colorConfig={{
                  labelColor: "#0d0d0d",
                  textColor: "#000000",
                }}
                colorMode="light"
                id="height"
                inputMode="text"
                label="Height (in cm)"
                maxLength={30}
                onChange={(e) => { props.onUpdateWeight(e.target.value) }}
                placeholder="Enter your height"
                type="text"
              />
            </div>
            <HorizontalSpacer n={2} />
            <div style={{ maxWidth: '100%' }}>
              <InputField
                colorConfig={{
                  labelColor: "#0d0d0d",
                  textColor: "#000000",
                }}
                colorMode="light"
                id="weight"
                inputMode="text"
                label="Weight (in Kg)"
                maxLength={30}
                onChange={(e) => { props.onUpdateHeight(e.target.value) }}
                placeholder="Enter your weight"
                type="text"
              />
            </div>
            <HorizontalSpacer n={2} />
            <div style={{ maxWidth: '100%' }}>
              <InputField
                colorConfig={{
                  labelColor: "#0d0d0d",
                  textColor: "#000000",
                }}
                colorMode="light"
                id="age"
                inputMode="text"
                label="Age"
                maxLength={30}
                onChange={() => { }}
                placeholder="Enter your age"
                type="text"
              />
            </div>
            <HorizontalSpacer n={4} />
            <div style={{maxWidth:'40%'}}>
            <GenderRadio />
            </div>
            
            <HorizontalSpacer n={4} />
            <Button {...getButtonConfig('blp50p1')} fullWidth={true}>
              Calculate
            </Button>
          </Column>
        </ContentWrapper>
      </ElevatedCard>
    </div>
  );
}

export default BMI;
