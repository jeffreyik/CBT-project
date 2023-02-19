const Users = ({ users }) => {
    return (
        users.map(user => {
            return (
                <div className="my-10 p-4 rounded-lg shadow-md cursor-pointer">
            <div className="flex justify-between">
                <h2>{user.user.email}</h2>
                <div className="status">
                    <p className="text-[green] font-bold">Logged in</p>
                </div>
            </div>
        </div>
            )
        })
    )
}

export default Users;