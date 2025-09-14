'use client';

import { AlertTriangle, AlertCircle, Info, Clock, ExternalLink } from 'lucide-react';

interface Alert {
    id: string;
    type: 'warning' | 'watch' | 'advisory';
    title: string;
    description: string;
    issued: string;
    validUntil: string;
    severity: 'low' | 'moderate' | 'high' | 'extreme';
    category: 'solar' | 'geomagnetic' | 'radiation';
}

export default function SpaceWeatherAlerts() {
    // Mock data - replace with real API data
    const alerts: Alert[] = [
        {
            id: '1',
            type: 'warning',
            title: 'Geomagnetic Storm Warning',
            description: 'G2 (Moderate) geomagnetic storm activity expected due to CME arrival.',
            issued: '2024-01-15 14:30 UTC',
            validUntil: '2024-01-16 06:00 UTC',
            severity: 'moderate',
            category: 'geomagnetic'
        },
        {
            id: '2',
            type: 'watch',
            title: 'Solar Radiation Storm Watch',
            description: 'S1 (Minor) solar radiation storm possible following M-class flare.',
            issued: '2024-01-15 12:15 UTC',
            validUntil: '2024-01-15 18:00 UTC',
            severity: 'low',
            category: 'radiation'
        }
    ];

    const getAlertIcon = (type: string) => {
        switch (type) {
            case 'warning':
                return <AlertTriangle className="w-5 h-5" />;
            case 'watch':
                return <AlertCircle className="w-5 h-5" />;
            default:
                return <Info className="w-5 h-5" />;
        }
    };

    const getAlertColors = (severity: string, type: string) => {
        if (type === 'warning') {
            switch (severity) {
                case 'extreme':
                    return 'border-red-500 bg-red-900/20 text-red-300';
                case 'high':
                    return 'border-orange-500 bg-orange-900/20 text-orange-300';
                case 'moderate':
                    return 'border-yellow-500 bg-yellow-900/20 text-yellow-300';
                default:
                    return 'border-blue-500 bg-blue-900/20 text-blue-300';
            }
        }

        if (type === 'watch') {
            return 'border-purple-500 bg-purple-900/20 text-purple-300';
        }

        return 'border-slate-500 bg-slate-900/20 text-slate-300';
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'solar':
                return 'text-orange-400 bg-orange-900/30';
            case 'geomagnetic':
                return 'text-blue-400 bg-blue-900/30';
            case 'radiation':
                return 'text-red-400 bg-red-900/30';
            default:
                return 'text-slate-400 bg-slate-900/30';
        }
    };

    const formatTimeAgo = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

        if (diffHours > 0) {
            return `${diffHours}h ${diffMins}m ago`;
        }
        return `${diffMins}m ago`;
    };

    return (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    Active Alerts
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        {alerts.length}
                    </span>
                </h3>
                <button className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-300 transition-colors">
                    <ExternalLink className="w-3 h-3" />
                    View All
                </button>
            </div>

            <div className="space-y-3">
                {alerts.length === 0 ? (
                    <div className="text-center py-8 text-slate-400">
                        <Info className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p>No active space weather alerts</p>
                        <p className="text-xs mt-1">All systems nominal</p>
                    </div>
                ) : (
                    alerts.map((alert) => (
                        <div
                            key={alert.id}
                            className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-lg ${getAlertColors(alert.severity, alert.type)}`}
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 mt-0.5">
                                    {getAlertIcon(alert.type)}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-semibold text-sm">{alert.title}</h4>
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${getCategoryColor(alert.category)}`}>
                                            {alert.category}
                                        </span>
                                    </div>

                                    <p className="text-sm opacity-90 mb-2 leading-relaxed">
                                        {alert.description}
                                    </p>

                                    <div className="flex items-center gap-4 text-xs opacity-75">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>Issued {formatTimeAgo(alert.issued)}</span>
                                        </div>
                                        <div>
                                            Valid until {new Date(alert.validUntil).toLocaleString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                timeZone: 'UTC',
                                                timeZoneName: 'short'
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Quick stats */}
            <div className="mt-4 pt-4 border-t border-slate-700/50">
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div className="text-lg font-bold text-red-400">
                            {alerts.filter(a => a.type === 'warning').length}
                        </div>
                        <div className="text-xs text-slate-400">Warnings</div>
                    </div>
                    <div>
                        <div className="text-lg font-bold text-purple-400">
                            {alerts.filter(a => a.type === 'watch').length}
                        </div>
                        <div className="text-xs text-slate-400">Watches</div>
                    </div>
                    <div>
                        <div className="text-lg font-bold text-blue-400">
                            {alerts.filter(a => a.type === 'advisory').length}
                        </div>
                        <div className="text-xs text-slate-400">Advisories</div>
                    </div>
                </div>
            </div>
        </div>
    );
}