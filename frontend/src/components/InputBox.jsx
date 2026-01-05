import { Mail, Lock, User, DollarSign } from 'lucide-react';

export function InputBox({ label, placeholder, onChange }) {

    const getIcon = () => {
        const lowerLabel = label?.toLowerCase() || '';
        if (lowerLabel.includes('email')) return <Mail className="w-5 h-5 text-white opacity-80" />;
        if (lowerLabel.includes('password')) return <Lock className="w-5 h-5 text-white opacity-80" />;
        if (lowerLabel.includes('name')) return <User className="w-5 h-5 text-white opacity-80" />;
        if (lowerLabel.includes('amount')) return <DollarSign className="w-5 h-5 text-white opacity-80" />;
        return <User className="w-5 h-5 text-white opacity-80" />;
    };

    return <div>
        <div className="text-sm font-medium text-left py-2 flex items-center gap-2 text-glass-white">
            {getIcon()}
            {label}
        </div>
        <input
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-lg glass-input"
        />
    </div>
}