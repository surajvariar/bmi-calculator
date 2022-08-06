import { Row } from '@cred/neopop-web/lib/components';
import React from 'react';
import Card from './card';
import $ from 'jquery'

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
        console.log("Inside BMI");
        console.log("Height ", this.state.height);
        console.log("Weight ", this.state.weight);
        console.log("Age ", this.state.age);
        console.log("Gender ", this.state.gender);
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
                "sex": this.state.gender
            }),
        };

        $.ajax(settings).done(function (data,textstatus,xhr) {
            console.log(data);
            console.log(textstatus);
            console.log(xhr.status)
        });
    }

    render() {
        return (
            <div style={{
                paddingTop: '100px'
            }}>
                <Row className="v-center">
                    <Card onUpdateHeight={this.updateHeight} onUpdateWeight={this.updateWeight} onUpdateAge={this.updateAge} onUpdateGender={this.updateGender} onCalculateBMI={this.handleCalculateBMI} />
                </Row>
            </div>
        )
    }
}

export default BMI;