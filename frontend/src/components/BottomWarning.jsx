import { Link } from "react-router-dom"

export function BottomWarning({ label, buttonText, to }) {
    return <div className="py-2 text-sm flex justify-center">
        <div className="text-glass-light">
            {label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer text-white font-semibold hover:text-opacity-80 transition-all" to={to}>
            {buttonText}
        </Link>
    </div>
}
