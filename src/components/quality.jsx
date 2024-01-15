import React from "react";

const Quality = (props) => {
    return (
        <>
            <span className={`badge bg-${props.color} m-1`}>{props.name}</span>
        </>
    )
}

export default Quality;