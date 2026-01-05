import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    return <div className="gradient-bg min-h-screen">
        <Appbar />
        <div className="max-w-6xl mx-auto px-4 py-8">
            <Balance value={"10,000"} />
            <Users />
        </div>
    </div>
}