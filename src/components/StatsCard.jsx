const StatsCard = ({ title, value, change, variant = 'default' }) => {
    const isPrimary = variant === 'primary';

    return (
        <div className={`p-6 rounded-2xl shadow-sm transition hover:-translate-y-1 ${isPrimary
                ? 'bg-gradient-to-br from-emerald-600 to-emerald-700 text-white'
                : 'bg-white'
            }`}>
            <div className="flex justify-between items-center mb-4">
                <span className={`text-sm ${isPrimary ? 'opacity-80' : 'text-gray-600'}`}>
                    {title}
                </span>
                <button className={`w-8 h-8 rounded-lg ${isPrimary ? 'bg-white/20' : 'bg-gray-100'
                    }`}>
                    ↗
                </button>
            </div>
            <h2 className={`text-4xl font-bold mb-2 ${isPrimary ? 'text-white' : 'text-gray-900'}`}>
                {value}
            </h2>
            <p className={`text-sm ${isPrimary ? 'opacity-80' : 'text-gray-600'}`}>
                📈 {change}
            </p>
        </div>
    );
};

export default StatsCard;
