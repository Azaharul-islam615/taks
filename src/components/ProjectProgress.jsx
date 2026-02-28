const ProjectProgress = () => {
    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center">
            <h3 className="text-lg font-bold text-gray-900 mb-8 self-start">Project Progress</h3>
            <div className="relative w-52 h-52 my-8">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="104"
                        cy="104"
                        r="85"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="22"
                    />
                    <circle
                        cx="104"
                        cy="104"
                        r="85"
                        fill="none"
                        stroke="#059669"
                        strokeWidth="22"
                        strokeDasharray="534"
                        strokeDashoffset="267"
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-6xl font-bold text-gray-900">41%</h2>
                    <p className="text-base text-gray-600">Project Ended</p>
                </div>
            </div>
            <div className="flex gap-5 mt-8">
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full"></span>
                    <span className="text-xs text-gray-600">Completed</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-gray-800 rounded-full"></span>
                    <span className="text-xs text-gray-600">In Progress</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
                    <span className="text-xs text-gray-600">Pending</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectProgress;
