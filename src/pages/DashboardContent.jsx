import StatsCard from '../components/StatsCard';
import ProjectAnalytics from '../components/ProjectAnalytics';
import Reminders from '../components/Reminders';
import ProjectList from '../components/ProjectList';
import TeamCollaboration from '../components/TeamCollaboration';
import ProjectProgress from '../components/ProjectProgress';
import TimeTracker from '../components/TimeTracker';
import '../styles/Dashboard.css';

const DashboardContent = () => {
    return (
        <div className="dashboard-content">
            <div className="dashboard-header">
                <div>
                    <h1>Dashboard</h1>
                    <p>Plan, prioritize, and accomplish your tasks with ease.</p>
                </div>
                <div className="header-actions">
                    <button className="btn-primary">+ Add Project</button>
                    <button className="btn-secondary">Import Data</button>
                </div>
            </div>

            <div className="grid grid-cols-4">
                <StatsCard
                    title="Total Projects"
                    value="24"
                    change="Increased from last month"
                    variant="primary"
                />
                <StatsCard
                    title="Ended Projects"
                    value="10"
                    change="Increased from last month"
                />
                <StatsCard
                    title="Running Projects"
                    value="12"
                    change="Increased from last month"
                />
                <StatsCard
                    title="Pending Project"
                    value="2"
                    change="On-Discuss"
                />
            </div>

            <div className="dashboard-grid">
                <ProjectAnalytics />
                <Reminders />
                <ProjectList />
                <TeamCollaboration />
                <ProjectProgress />
                <TimeTracker />
            </div>
        </div>
    );
};

export default DashboardContent;
