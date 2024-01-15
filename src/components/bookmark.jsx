import React from "react";
const Bookmark = (props) => {
    return (
        <>
            <button onClick={props.onToggleBookMark}>
                <i className={"bi bi-bookmark" + (props.status ? "-heart-fill" : "")}></i>
            </button>
        </>
    )
}

export default Bookmark;