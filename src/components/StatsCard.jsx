const StatsCard = ({ title, value, change, variant = 'default' }) => {
    const isPrimary = variant === 'primary';

    return (
        <div className={`p-6 rounded-2xl shadow-sm transition-all duration-500 ease-in-out ${isPrimary
            ? 'bg-gradient-to-br from-emerald-600 to-emerald-700 text-white'
            : 'bg-white hover:bg-gradient-to-br hover:from-emerald-600 hover:to-emerald-700 hover:text-white hover:-translate-y-1 group'
            }`}>
            <div className="flex justify-between items-center mb-4">
                <span className={`text-sm ${isPrimary ? 'opacity-80' : 'text-gray-600 group-hover:text-white group-hover:opacity-80'}`}>
                    {title}
                </span>
                <button className={`w-8 h-8 rounded-lg transition ${isPrimary ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-white/20'
                    }`}>
                    ↗
                </button>
            </div>
            <h2 className={`text-4xl font-bold mb-2 ${isPrimary ? 'text-white' : 'text-gray-900 group-hover:text-white'}`}>
                {value}
            </h2>
            <p className={`text-sm ${isPrimary ? 'opacity-80' : 'text-gray-600 group-hover:text-white group-hover:opacity-80'}`}>
                📈 {change}
            </p>
        </div>
    );
};

export default StatsCard;
