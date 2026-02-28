const Header = () => {
    return (
        <header className="sticky top-0 z-40 flex justify-between items-center px-8 py-6 bg-white border-b border-gray-200">
            <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl w-96">
                <span className="text-xl text-gray-400">🔍</span>
                <input
                    type="text"
                    placeholder="Search task..."
                    className="flex-1 bg-transparent border-none outline-none text-sm"
                />
                <span className="text-xs text-gray-400 bg-white px-2 py-1 rounded">⌘F</span>
            </div>

            <div className="flex items-center gap-4">
                <button className="w-10 h-10 bg-gray-50 hover:bg-gray-200 rounded-xl flex items-center justify-center text-xl transition">
                    ✉️
                </button>
                <button className="w-10 h-10 bg-gray-50 hover:bg-gray-200 rounded-xl flex items-center justify-center text-xl transition">
                    🔔
                </button>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                        TM
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900 text-sm">Totok Michael</p>
                        <p className="text-xs text-gray-500">tmichael24@gmail.com</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
