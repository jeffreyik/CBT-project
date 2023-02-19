import { useEffect } from "react"
import AdminQuestion from "../components/AdminQuestion"
import Users from "../components/Users"
import { useAuthValue } from "../context/AuthContext"

const AdminDashboard = () => {
    const {users, loading} = useAuthValue()

    useEffect(() => {
        console.log(users)
    }, [])

    return (
        <div className="admin-dashboard">
            <div className="flex justify-between items-center">
                <h1 className="text-[24px] font-bold">Questions</h1>
                <button className="rounded-lg bg-black text-white p-3">Add Questions</button>
            </div>
            <div>
                <AdminQuestion />
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-[24px] font-bold">Users</h1>
            </div>
            <div>
                {loading ? 'Loading...' : <Users users={users} />}
            </div>
        </div>
    )
}

export default AdminDashboard