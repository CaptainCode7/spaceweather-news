'use client';

import { useState, useEffect } from 'react';
import { Sun, Globe, Activity, AlertTriangle } from 'lucide-react';

export default function DashboardHeader() {
    const [currentTime, setCurrentTime] = useState<string>('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toUTCString());
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                            <Sun className="w-8 h-8 text-white" />
                        </div>
                        Space Weather Dashboard
                    </h1>
                    <p className="text-slate-300 mt-2 flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Real-time monitoring of solar and geomagnetic activity
                    </p>
                </div>

                <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Activity className="w-4 h-4" />
                        <span>Live Data</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-xs text-slate-500 font-mono">
                        {isClient ? currentTime : 'Loading time...'}
                    </p>
                </div>
            </div>

            {/* Status indicators */}
            <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Systems Operational
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                    <Activity className="w-3 h-3" />
                    Data Streaming
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-orange-900/30 text-orange-300 rounded-full text-sm">
                    <AlertTriangle className="w-3 h-3" />
                    2 Active Alerts
                </div>
            </div>
        </div>
    );
}