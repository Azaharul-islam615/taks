const ProjectList = () => {
    const projects = [
        { name: 'Develop API Endpoints', icon: '⚡', status: 'On-Discuss', color: 'bg-purple-500' },
        { name: 'Onboarding Flow', icon: '�', status: 'M:on-Sat Dec 16, 2024', color: 'bg-cyan-500' },
        { name: 'Build Dashboard', icon: '✨', status: 'Mon-Sat Dec 16, 2024', color: 'bg-emerald-500' },
        { name: 'Optimize Page Load', icon: '⚡', status: 'Mon-Sat Dec 16, 2024', color: 'bg-amber-500' },
        { name: 'Cross-Browser Testing', icon: '🎨', status: 'Mon-Sat Dec 16, 2024', color: 'bg-purple-500' }
    ];

    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-gray-900">Project</h3>
                <button className="px-3 py-1.5 bg-white border-2 border-gray-200 hover:border-emerald-600 hover:text-emerald-600 rounded-lg font-semibold text-sm transition">
                    + New
                </button>
            </div>
            <div className="flex flex-col gap-2">
                {projects.map((project, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition">
                        <div className={`w-10 h-10 ${project.color} rounded-xl flex items-center justify-center text-lg`}>
                            {project.icon}
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-900">{project.name}</h4>
                            <p className="text-xs text-gray-500">{project.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
