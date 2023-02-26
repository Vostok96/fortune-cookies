import React from "react";

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>Ver <br /> otro</button>
        </div>
    )
}

export default Button