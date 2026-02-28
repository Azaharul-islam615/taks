import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../styles/MainLayout.css';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Sidebar />
            <div className="content-wrapper">
                <Header />
                <div className="page-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
