import { InputField } from "@cred/neopop-web/lib/components";
import React from "react";

function TextField(props) {
    return (
        <InputField
            colorConfig={{
                labelColor: "#0d0d0d",
                errorColor: "#EE4D37",
                textColor: "#000000",
            }}
            colorMode="light"
            id={props.age}
            inputMode="text"
            label={props.label}
            maxLength={30}
            onChange={(e) => { props.onUpdate(e.target.value); props.checkIsValid(e.target.value);}}
            placeholder={props.placeholder}
            type="text"
            errorMessage={props.errMsg}
            hasError={props.textIsValid}
        />
    )
}

export default TextField;