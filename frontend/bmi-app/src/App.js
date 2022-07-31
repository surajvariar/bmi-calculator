import './App.css';
import {
  ElevatedCard,
  Column,
  Row,
  Typography,
  HorizontalSpacer,
  Button,
  InputField
} from '@cred/neopop-web/lib/components';
import {
  mainColors,
  fontNameSpaces,
  getButtonConfig,
} from '@cred/neopop-web/lib/primitives';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    padding: 20px;
`;

function App() {
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
                autoFocus
                colorConfig={{
                  labelColor: "#0d0d0d",
                  textColor: "#000000",
                }}
                colorMode="light"
                id="text_field"
                inputMode="text"
                label="Height"
                maxLength={30}
                onBlur={function noRefCheck() { }}
                onChange={function noRefCheck() { }}
                onFocus={function noRefCheck() { }}
                placeholder="Enter your height"
                type="text"
              />
            </div>
            <HorizontalSpacer n={2} />
            <div style={{ maxWidth: '100%' }}>
              <InputField
                autoFocus
                colorConfig={{
                  labelColor: "#0d0d0d",
                  textColor: "#000000",
                }}
                colorMode="light"
                id="text_field"
                inputMode="text"
                label="Weight"
                maxLength={30}
                onBlur={function noRefCheck() { }}
                onChange={function noRefCheck() { }}
                onFocus={function noRefCheck() { }}
                placeholder="Enter your weight"
                type="text"
              />
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

export default App;
