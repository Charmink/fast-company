import React from "react";
import Bookmark from "./bookmark";
import Quality from "./quality";

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
}

export default User;