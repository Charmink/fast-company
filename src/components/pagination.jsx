import React from "react";
import _ from "lodash"
import PropTypes from 'prop-types';

const Pagination = (props) => {
    const { itemsCount, pageSize, onPageChange, currentPage} = props
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;

    const pages = _.range(1, pageCount + 1);
    return (
        <nav>
            <ul className="pagination">
                {
                    pages.map(page => (
                        <li key={page} className={"page-item" + (page === currentPage ? " active" : "")}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a onClick={() => onPageChange(page)} className="page-link">{page}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;