
import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

    return <>
        <div className="font-bold mt-6 text-lg text-glass-white mb-4">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-4 py-3 rounded-lg glass-input"></input>
        </div>
        <div className="space-y-3 mt-4">
            {users.map(user => <User key={user._id} user={user} />)}
        </div>
    </>
}

function User({ user }) {
    const navigate = useNavigate();

    return <div className="glass-card p-4">
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <div className="rounded-full h-12 w-12 glass-avatar flex justify-center items-center mr-3">
                    <div className="text-xl text-white font-semibold">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="text-glass-white font-medium">
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <Button onClick={(e) => {
                    navigate("/send?id=" + user._id + "&name=" + user.firstName);
                }} label={"Send Money"} />
            </div>
        </div>
    </div>
}
