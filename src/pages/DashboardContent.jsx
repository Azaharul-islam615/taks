import { useState, useEffect } from 'react';
import axios from 'axios';
import StatsCard from '../components/StatsCard';
import ProjectAnalytics from '../components/ProjectAnalytics';
import Reminders from '../components/Reminders';
import ProjectList from '../components/ProjectList';
import TeamCollaboration from '../components/TeamCollaboration';
import ProjectProgress from '../components/ProjectProgress';
import TimeTracker from '../components/TimeTracker';

const DashboardContent = () => {
    const [overview, setOverview] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOverview = async () => {
            try {
                const response = await axios.get('https://task-api-eight-flax.vercel.app/api/overview');
                setOverview(response.data);
            } catch (error) {
                console.error('Error fetching overview:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOverview();
    }, []);

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-600">Plan, prioritize, and accomplish your tasks with ease.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition">
                        + Add Project
                    </button>
                    <button className="px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-xl font-semibold hover:border-emerald-600 hover:text-emerald-600 transition">
                        Import Data
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-10">Loading...</div>
            ) : (
                <>
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        <StatsCard
                            title="Total Users"
                            value={overview?.totalUsers?.toLocaleString() || '0'}
                            change="Active users in system"
                            variant="primary"
                        />
                        <StatsCard
                            title="Active Users"
                            value={overview?.activeUsers?.toLocaleString() || '0'}
                            change="Currently online"
                        />
                        <StatsCard
                            title="Revenue"
                            value={`$${(overview?.revenue / 1000).toFixed(1)}k` || '$0'}
                            change="Total earnings"
                        />
                        <StatsCard
                            title="Growth"
                            value={`${overview?.growth}%` || '0%'}
                            change="Compared to last month"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col gap-4">
                            <ProjectAnalytics />
                            <TeamCollaboration />
                        </div>

                        <div className="flex flex-col gap-4">
                            <Reminders />
                            <ProjectProgress />
                        </div>

                        <div className="flex flex-col gap-4">
                            <ProjectList />
                            <TimeTracker />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default DashboardContent;
