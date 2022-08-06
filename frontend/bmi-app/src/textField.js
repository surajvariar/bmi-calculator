import { InputField } from "@cred/neopop-web/lib/components";
import React from "react";

function TextField(props) {
    return(
        <InputField
        colorConfig={{
            labelColor: "#0d0d0d",
            textColor: "#000000",
        }}
        colorMode="light"
        id={props.age}
        inputMode="text"
        label={props.label}
        maxLength={30}
        onChange={(e) => { props.onUpdate(e.target.value)}}
        placeholder={props.placeholder}
        type="text" 
        />
    )
}

export default TextField;