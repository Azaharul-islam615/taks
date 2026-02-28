import { useState } from 'react';
import { useNavigate } from 'react-router';
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple validation - in real app, authenticate with backend
        if (email && password) {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/dashboard');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="logo">
                        <div className="logo-icon">D</div>
                        <h2>Donezo</h2>
                    </div>
                </div>

                <h1>Welcome Back</h1>
                <p className="subtitle">Sign in to continue to your dashboard</p>

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        Sign In
                    </button>
                </form>

                <p className="signup-text">
                    Don't have an account? <a href="#">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
