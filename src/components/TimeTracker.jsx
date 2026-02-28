import { useState, useEffect } from 'react';

const TimeTracker = () => {
    const [time, setTime] = useState(5048);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center text-white">
            <h3 className="text-lg font-bold mb-4 self-start">Time Tracker</h3>
            <div className="text-4xl font-bold font-mono mb-6">{formatTime(time)}</div>
            <div className="flex gap-3">
                <button
                    onClick={() => setIsRunning(!isRunning)}
                    className="w-12 h-12 bg-white hover:bg-gray-100 text-gray-900 rounded-full flex items-center justify-center text-xl transition hover:scale-110"
                >
                    {isRunning ? '⏸' : '▶'}
                </button>
                <button
                    onClick={() => { setTime(0); setIsRunning(false); }}
                    className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xl transition hover:scale-110"
                >
                    ⏹
                </button>
            </div>
        </div>
    );
};

export default TimeTracker;
