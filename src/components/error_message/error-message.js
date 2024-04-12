import React from "react";

const ErrorMessage = ({text}) => {
    return (
        <div>
            <span
                style={{
                    'lineHeight':'37px',
                    'paddingLeft': '20px',
                    'color': 'red'
                }}
            >
                {text}
            </span>
        </div>);
};
export default ErrorMessage;