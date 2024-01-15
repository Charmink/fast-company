import React from "react";

const SearchStatus = (props) => {
    const formatPhrase = () => {
        return props.count === 0 ?
            <span className="badge text-bg-danger">Нет встреч на сегодня</span> :
            <span className="badge text-bg-primary">{props.count} встреч запланировано на сегодня</span>;
    }
    return (
        <>
            <h1>{formatPhrase()}</h1>
        </>
    )
}

export default SearchStatus;