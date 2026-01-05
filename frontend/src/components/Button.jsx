export function Button({ label, onClick }) {
    return <button
        onClick={onClick}
        type="button"
        className="w-full vibrant-button font-medium rounded-lg text-sm px-5 py-3 mb-2"
    >
        {label}
    </button>
}
