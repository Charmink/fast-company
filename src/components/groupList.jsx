import React from "react";

const GroupList = (props) => {
    const { items, selectedItem, onItemSelect, onFilterReset } = props
    console.log(selectedItem)
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3">
            <ul className="list-group">
                {Object.keys(items).map(item =>
                    <li
                        key={item}
                        className={"list-group-item" + (selectedItem === items[item] ? " active" : "")}
                        onClick={() => onItemSelect(items[item])}
                        role="button"
                    >{items[item].name}</li>
                )}
            </ul>
            <button onClick={onFilterReset}
                className="btn btn-secondary">Сброс</button>
        </div>
);
}

export default GroupList;