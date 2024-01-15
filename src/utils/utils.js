export const filterUsersByProfession = (users, profession) => {
    if (!profession) return users;
    return users.filter(user => user.profession === profession)
}