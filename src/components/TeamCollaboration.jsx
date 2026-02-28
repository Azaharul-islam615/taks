const TeamCollaboration = () => {
    const members = [
        { name: 'Alexandra Deff', task: 'Github Project Repository', status: 'Completed', avatar: '👩' },
        { name: 'Edwin Adenike', task: 'Integrate User Authentication System', status: 'In Progress', avatar: '👨' },
        { name: 'Isaac Oluwatomilorun', task: 'Develop Search and Filter Functionality', status: 'Pending', avatar: '👨' },
        { name: 'David Oishedi', task: 'Responsive Layout for Homepage', status: 'In Progress', avatar: '👨' }
    ];

    const getStatusColor = (status) => {
        if (status === 'Completed') return 'bg-emerald-100 text-emerald-700';
        if (status === 'In Progress') return 'bg-amber-100 text-amber-700';
        return 'bg-red-100 text-red-700';
    };

    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">Team Collaboration</h3>
                <button className="px-3 py-1.5 bg-white border-2 border-gray-200 hover:border-emerald-600 hover:text-emerald-600 rounded-lg font-semibold text-sm transition">
                    + Add Member
                </button>
            </div>
            <div className="flex flex-col gap-3">
                {members.map((member, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl flex-shrink-0">
                            {member.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 truncate">{member.name}</h4>
                            <p className="text-xs text-gray-600 truncate">{member.task}</p>
                        </div>
                        <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap ${getStatusColor(member.status)}`}>
                            {member.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamCollaboration;
