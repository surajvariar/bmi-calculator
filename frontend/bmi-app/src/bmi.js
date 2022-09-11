import { Row, ToastContainer, showToast } from '@cred/neopop-web/lib/components';
import React from 'react';
import Card from './card';
import $ from 'jquery'

function displayToast(status, msg, backgroundColor) {
    if (status === 200) {
        showToast(msg, {
            type: 'success', dismissOnClick: true, colorConfig: {
                background: backgroundColor,
                color: 'black'
            },
            textStyle: {
                heading: {
                    fontType: "caps",
                    fontWeight: '600',
                    fontSize: '40'
                }
            }
        });
    }
    else if (status === 400) {
        showToast(msg, {
            type: 'error', dismissOnClick: true
        });
    }
    else {
        showToast(msg, { type: 'warning', dismissOnClick: true });
    }
}

class BMI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            weight: 0,
            age: 0,
            bmi: 0,
            gender: '',
        }
        this.updateHeight = this.updateHeight.bind(this);
        this.updateWeight = this.updateWeight.bind(this);
        this.updateAge = this.updateAge.bind(this);
        this.updateGender = this.updateGender.bind(this);
        this.handleCalculateBMI = this.handleCalculateBMI.bind(this);
    }

    updateHeight(height) {
        height = Number(height);
        this.setState({
            height: height
        });
    }

    updateWeight(weight) {
        weight = Number(weight);
        this.setState({
            weight: weight
        }
        );
    }

    updateAge(age) {
        age = Number(age);
        this.setState({
            age: age
        })
    }


    updateGender(gender) {
        this.setState({
            gender: gender === "male" ? 'm' : 'f'
        })
    }

    handleCalculateBMI() {
        let settings = {
            "url": "http://localhost:8080/bmi",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                "weight": this.state.weight,
                "height": this.state.height,
                "age": this.state.age,
                "gender": this.state.gender
            }),
        };

        $.ajax(settings).done(function (data, _textstatus, xhr) {
            let backgroundColor;
            switch (data.condition) {
                case "Under Fat":
                    backgroundColor = "#3398FF"
                    break;
                case "Healthy":
                    backgroundColor = "#33FF57"
                    break;
                case "OverWeight":
                    backgroundColor = "#DBFF33"
                    break;
                case "Obese":
                    backgroundColor = "#FF5733"

                    break;
                default:
                    break;
            }
            displayToast(xhr.status, data.condition, backgroundColor);
        }).fail(function (xhr,) {
            displayToast(xhr.status, xhr.responseText);
        });
    }



    render() {
        return (
            <div style={{
                paddingTop: '100px'
            }}>
                <ToastContainer />
                <Row className="v-center">
                    <Card
                        onUpdateHeight={this.updateHeight}
                        onUpdateWeight={this.updateWeight}
                        onUpdateAge={this.updateAge}
                        onUpdateGender={this.updateGender}
                        onCalculateBMI={this.handleCalculateBMI}
                        />
                </Row>
            </div>
        )
    }
}

export default BMI;