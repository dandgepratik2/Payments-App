
export const Balance = ({ value }) => {
    return <div className="glass-card p-6 mb-6">
        <div className="flex items-center">
            <div className="font-bold text-lg text-glass-white">
                Your balance
            </div>
            <div className="font-semibold ml-4 text-lg text-glass-white">
                Rs {value}
            </div>
        </div>
    </div>
}