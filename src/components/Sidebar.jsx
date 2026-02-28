const Sidebar = () => {
    return (
        <div className="w-72 bg-white border-r border-gray-200 p-6 flex flex-col gap-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    D
                </div>
                <span className="text-2xl font-bold text-gray-900">Donezo</span>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-xs text-gray-400 font-semibold mb-2">MENU</p>
                <nav className="flex flex-col gap-1">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 bg-emerald-600 text-white rounded-xl transition">
                        <span className="text-xl">📊</span>
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition relative">
                        <span className="text-xl">✓</span>
                        Tasks
                        <span className="ml-auto bg-emerald-600 text-white px-2 py-0.5 rounded-full text-xs font-semibold">03</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition">
                        <span className="text-xl">📅</span>
                        Calendar
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition">
                        <span className="text-xl">📈</span>
                        Analytics
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition">
                        <span className="text-xl">👥</span>
                        Team
                    </a>
                </nav>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-xs text-gray-400 font-semibold mb-2">GENERAL</p>
                <nav className="flex flex-col gap-1">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition">
                        <span className="text-xl">⚙️</span>
                        Settings
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition">
                        <span className="text-xl">❓</span>
                        Help
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition">
                        <span className="text-xl">🚪</span>
                        Logout
                    </a>
                </nav>
            </div>

            <div className="mt-auto bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl text-center text-white">
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-semibold mb-1">Download our Mobile App</h4>
                <p className="text-sm text-gray-400 mb-4">Get more exclusive way</p>
                <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition">
                    Download
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
