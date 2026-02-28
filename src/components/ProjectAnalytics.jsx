import { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectAnalytics = () => {
    const [analyticsData, setAnalyticsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://task-api-eight-flax.vercel.app/api/analytics');
                setAnalyticsData(response.data);
                setError(null);
            } catch (err) {
                setError('Failed to load analytics data');
                console.error('Error fetching analytics:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchAnalytics();
    }, []);

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    if (loading) {
        return (
            <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Analytics</h3>
                <div className="flex items-center justify-center h-32 text-gray-500">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Analytics</h3>
                <div className="flex items-center justify-center h-32 text-red-500">{error}</div>
            </div>
        );
    }

    if (!analyticsData || analyticsData.length === 0) {
        return (
            <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Analytics</h3>
                <div className="flex items-center justify-center h-40 text-gray-400">No data available</div>
            </div>
        );
    }

    const maxValue = Math.max(...analyticsData.map(item => item.value || 0));

    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Project Analytics</h3>
            <div className="flex items-end justify-around h-32 gap-3 px-2">
                {analyticsData.map((item, index) => {
                    const heightPercent = maxValue > 0 ? Math.max(40, (item.value / maxValue) * 100) : 40;
                    const isStriped = index === 0 || index === 4 || index === 5 || index === 6;

                    return (
                        <div key={index} className="flex flex-col items-center justify-end gap-2 flex-1 h-full">
                            <div
                                className={`w-full max-w-[45px] rounded-full transition ${isStriped
                                    ? 'bg-gradient-to-br from-gray-200 to-gray-300'
                                    : 'bg-gradient-to-t from-emerald-600 to-emerald-400 shadow-lg shadow-emerald-500/30'
                                    }`}
                                style={{
                                    height: `${heightPercent}%`,
                                    backgroundImage: isStriped ? 'repeating-linear-gradient(45deg, #e5e7eb 0px, #e5e7eb 10px, #d1d5db 10px, #d1d5db 20px)' : undefined
                                }}
                            ></div>
                            <span className="text-sm font-semibold text-gray-400 uppercase">
                                {item.day || days[index]}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectAnalytics;
