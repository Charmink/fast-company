import React from "react";
import PropTypes from "prop-types";

const Bookmark = (props) => {
    return (
        <>
            <button onClick={props.onToggleBookMark}>
                <i className={"bi bi-bookmark" + (props.status ? "-heart-fill" : "")}></i>
            </button>
        </>
    )
};

Bookmark.propTypes = {
    onToggleBookMark: PropTypes.func.isRequired,
    status: PropTypes.bool.isRequired
};

export default Bookmark;