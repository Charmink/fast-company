import React, {useState, useEffect} from "react";
import api from "../api"
import SearchStatus from "./searchStatus";
import User from "./user";
import Pagination from "./pagination";
import GroupList from "./groupList";
import {filterUsersByProfession} from "../utils/utils";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProfession, setSelectedProfession] = useState();
    const [professions, setProfessions] = useState();
    const pageSize = 4;

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, [])

    useEffect(() => {
        setCurrentPage(1)
        setProfessions(professions)
    }, [professions]);

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId))
        if (filterUsersByProfession(users, selectedProfession).length <= pageSize * (currentPage - 1) + 1) {
            setCurrentPage(currentPage - 1)
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

    const handleProfessionSelect = (item) => {
        setCurrentPage(1)
        setSelectedProfession(item)
    }

    const handleFilterReset = () => {
        setSelectedProfession(null);
    }

    return (
        <div className="d-flex">
            {professions && <GroupList
                items={professions}
                selectedItem={selectedProfession}
                onItemSelect={handleProfessionSelect}
                onFilterReset={handleFilterReset}
            />}
            <div className="d-flex flex-column">
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
                        filterUsersByProfession(users, selectedProfession).slice(pageSize * (currentPage - 1), currentPage * pageSize).map(user => (
                                <User key={user._id} {...user} onDelete={handleDelete}
                                      onToggleBookMark={handleToggleBookMark}/>
                            )
                        )
                    }
                    </tbody>
                </table>
                <div className="d-flex justify-content-center">
                    <Pagination
                    itemsCount={filterUsersByProfession(users, selectedProfession).length} currentPage={currentPage}
                    pageSize={pageSize} onPageChange={handlePageChange}/>
                </div>

            </div>
        </div>
    )
};

export default Users