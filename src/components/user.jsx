import React from "react";
import Bookmark from "./bookmark";
import Quality from "./quality";
import PropTypes from "prop-types";

const User = (props) => {
    return (
        <>
            <tr>
                <td>{props.name}</td>
                <td>
                    {props.qualities.map((qual) => (
                        <Quality key={qual._id} {...qual} />
                    ))}
                </td>
                <td>{props.profession.name}</td>
                <td>{props.completedMeetings}</td>
                <td>{props.rate}/5</td>
                <td>
                    <Bookmark
                        status={props.bookmark}
                        onToggleBookMark={() => props.onToggleBookMark(props._id)}
                    />
                </td>
                <td>
                    <button
                        onClick={() => props.onDelete(props._id)}
                        className="btn btn-danger"
                    >
                        Удалить
                    </button>
                </td>
            </tr>

        </>
    )
};

User.propTypes = {
    name: PropTypes.string.isRequired,
    qualities: PropTypes.arrayOf(
        PropTypes.shape(
            {
                _id: PropTypes.string.isRequired,
                color: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            })
    ).isRequired,
    profession: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default User;