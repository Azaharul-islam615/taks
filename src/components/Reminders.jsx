const Reminders = () => {
    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Reminders</h3>
            <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="text-base font-semibold text-gray-900 mb-1">Meeting with Arc Company</h4>
                <p className="text-sm text-gray-600 mb-3">Thu, 12 Dec 2024 - 04:00 pm</p>
                <button className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition flex items-center justify-center gap-2">
                    ▶ Start Meeting
                </button>
            </div>
        </div>
    );
};

export default Reminders;
