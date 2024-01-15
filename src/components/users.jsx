import React, {useState} from "react";
import api from "../api"
import SearchStatus from "./searchStatus";
import User from "./user";
import Pagination from "./pagination";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 4;

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId))
        if (users.length <= pageSize * (currentPage - 1) - 1) {
            handlePageChange(currentPage - 1)
        }
    };

    const handleToggleBookMark = (userId) => {
        const userIndex = users.findIndex(user => user._id === userId);
        const newUsers = [...users];
        newUsers[userIndex].bookmark = !users[userIndex].bookmark
        setUsers(newUsers)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    return (
        <React.Fragment>
            <SearchStatus count={users.length}/>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встречи</th>
                    <th scope="col">Оценка</th>
                    <th scope="col">Избранное</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {
                    users.slice(pageSize * (currentPage - 1), currentPage * pageSize).map(user => (
                        <User key={user._id} {...user} onDelete={handleDelete} onToggleBookMark={handleToggleBookMark}/>
                        )
                    )
                }
                </tbody>
            </table>
            <Pagination itemsCount={users.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}/>
        </React.Fragment>
    )
};

export default Users