'use client';

import { TrendingUp, TrendingDown, Sun, Zap } from 'lucide-react';

interface SolarData {
    flareClass: string;
    flareTime: string;
    solarWind: number;
    protonFlux: number;
    trend: 'up' | 'down' | 'stable';
}

export default function SolarActivityCard() {
    // Mock data - replace with real API data
    const solarData: SolarData = {
        flareClass: 'M2.1',
        flareTime: '14:32 UTC',
        solarWind: 420,
        protonFlux: 0.8,
        trend: 'up'
    };

    const getTrendIcon = (trend: string) => {
        switch (trend) {
            case 'up':
                return <TrendingUp className="w-4 h-4 text-red-400" />;
            case 'down':
                return <TrendingDown className="w-4 h-4 text-green-400" />;
            default:
                return <div className="w-4 h-4 bg-yellow-400 rounded-full" />;
        }
    };

    const getFlareColor = (flareClass: string) => {
        const level = flareClass.charAt(0);
        switch (level) {
            case 'X':
                return 'text-red-400 bg-red-900/20 border-red-500/30';
            case 'M':
                return 'text-orange-400 bg-orange-900/20 border-orange-500/30';
            case 'C':
                return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
            default:
                return 'text-blue-400 bg-blue-900/20 border-blue-500/30';
        }
    };

    return (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Sun className="w-5 h-5 text-orange-400" />
                    Solar Activity
                </h3>
                {getTrendIcon(solarData.trend)}
            </div>

            <div className="space-y-4">
                {/* Latest Solar Flare */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Latest Flare</span>
                        <span className="text-xs text-slate-500">{solarData.flareTime}</span>
                    </div>
                    <div className={`inline-flex items-center px-3 py-1 rounded-lg border ${getFlareColor(solarData.flareClass)}`}>
                        <Zap className="w-4 h-4 mr-2" />
                        <span className="font-bold text-lg">{solarData.flareClass}</span>
                    </div>
                </div>

                {/* Solar Wind Speed */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Solar Wind Speed</span>
                        <span className="text-sm font-semibold text-white">{solarData.solarWind} km/s</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${Math.min((solarData.solarWind / 800) * 100, 100)}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                        <span>0</span>
                        <span>400</span>
                        <span>800+ km/s</span>
                    </div>
                </div>

                {/* Proton Flux */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Proton Flux</span>
                        <span className="text-sm font-semibold text-white">{solarData.protonFlux} pfu</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${Math.min((solarData.protonFlux / 10) * 100, 100)}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                        <span>0</span>
                        <span>5</span>
                        <span>10+ pfu</span>
                    </div>
                </div>
            </div>

            {/* Status indicator */}
            <div className="mt-4 pt-4 border-t border-slate-700/50">
                <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-slate-300">Real-time monitoring active</span>
                </div>
            </div>
        </div>
    );
}