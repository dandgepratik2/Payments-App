
export const Appbar = () => {
    return <div className="glass-appbar h-14 flex justify-between sticky top-0 z-50">
        <div className="flex flex-col justify-center h-full ml-4">
            <span className="text-glass-white font-bold text-lg">Payments App</span>
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                <span className="text-glass-light">Hello</span>
            </div>
            <div className="rounded-full h-12 w-12 glass-avatar flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl text-white font-semibold">
                    U
                </div>
            </div>
        </div>
    </div>
}