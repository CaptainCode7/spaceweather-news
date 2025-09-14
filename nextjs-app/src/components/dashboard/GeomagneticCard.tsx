'use client';

import { Globe, Activity, AlertCircle, Compass } from 'lucide-react';

interface GeomagneticData {
    kIndex: number;
    forecast: 'quiet' | 'unsettled' | 'active' | 'minor' | 'moderate' | 'strong' | 'severe' | 'extreme';
    bz: number;
    density: number;
    lastUpdate: string;
}

export default function GeomagneticCard() {
    // Mock data - replace with real API data
    const geoData: GeomagneticData = {
        kIndex: 4.2,
        forecast: 'active',
        bz: -12.5,
        density: 8.2,
        lastUpdate: '15:45 UTC'
    };

    const getKIndexColor = (kIndex: number) => {
        if (kIndex >= 5) return 'text-red-400 bg-red-900/20';
        if (kIndex >= 4) return 'text-orange-400 bg-orange-900/20';
        if (kIndex >= 3) return 'text-yellow-400 bg-yellow-900/20';
        return 'text-green-400 bg-green-900/20';
    };

    const getKIndexLevel = (kIndex: number) => {
        if (kIndex >= 5) return 'STORM';
        if (kIndex >= 4) return 'ACTIVE';
        if (kIndex >= 3) return 'UNSETTLED';
        return 'QUIET';
    };

    const getForecastColor = (forecast: string) => {
        switch (forecast) {
            case 'extreme':
            case 'severe':
                return 'text-red-400';
            case 'strong':
            case 'moderate':
                return 'text-orange-400';
            case 'minor':
            case 'active':
                return 'text-yellow-400';
            case 'unsettled':
                return 'text-blue-400';
            default:
                return 'text-green-400';
        }
    };

    return (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-400" />
                    Geomagnetic Activity
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Activity className="w-3 h-3" />
                    {geoData.lastUpdate}
                </div>
            </div>

            <div className="space-y-4">
                {/* K-Index */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Planetary K-Index</span>
                        <div className={`px-2 py-1 rounded text-xs font-bold ${getKIndexColor(geoData.kIndex)}`}>
                            {getKIndexLevel(geoData.kIndex)}
                        </div>
                    </div>

                    <div className="flex items-end gap-2">
                        <span className="text-3xl font-bold text-white">{geoData.kIndex}</span>
                        <span className="text-sm text-slate-400 mb-1">/ 9</span>
                    </div>

                    <div className="w-full bg-slate-700 rounded-full h-3">
                        <div
                            className={`h-3 rounded-full transition-all duration-500 ${geoData.kIndex >= 5
                                    ? 'bg-gradient-to-r from-red-600 to-red-400'
                                    : geoData.kIndex >= 4
                                        ? 'bg-gradient-to-r from-orange-600 to-orange-400'
                                        : geoData.kIndex >= 3
                                            ? 'bg-gradient-to-r from-yellow-600 to-yellow-400'
                                            : 'bg-gradient-to-r from-green-600 to-green-400'
                                }`}
                            style={{ width: `${(geoData.kIndex / 9) * 100}%` }}
                        ></div>
                    </div>

                    <div className="flex justify-between text-xs text-slate-500">
                        <span>0 (Quiet)</span>
                        <span>5 (Storm)</span>
                        <span>9 (Extreme)</span>
                    </div>
                </div>

                {/* IMF Bz */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400 flex items-center gap-1">
                            <Compass className="w-3 h-3" />
                            IMF Bz
                        </span>
                        <span className={`text-sm font-semibold ${geoData.bz < 0 ? 'text-red-400' : 'text-green-400'}`}>
                            {geoData.bz > 0 ? '+' : ''}{geoData.bz} nT
                        </span>
                    </div>
                    <div className="text-xs text-slate-500">
                        {geoData.bz < -10 ? 'Strong southward (storm risk)' :
                            geoData.bz < 0 ? 'Southward orientation' :
                                'Northward orientation'}
                    </div>
                </div>

                {/* Solar Wind Density */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">SW Density</span>
                        <span className="text-sm font-semibold text-white">{geoData.density} p/cm³</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-purple-500 to-pink-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${Math.min((geoData.density / 20) * 100, 100)}%` }}
                        ></div>
                    </div>
                </div>

                {/* Forecast */}
                <div className="space-y-2">
                    <span className="text-sm text-slate-400">24h Forecast</span>
                    <div className={`font-semibold capitalize ${getForecastColor(geoData.forecast)}`}>
                        {geoData.forecast} conditions expected
                    </div>
                </div>
            </div>

            {/* Alert indicator */}
            {geoData.kIndex >= 4 && (
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                    <div className="flex items-center gap-2 text-sm text-orange-300">
                        <AlertCircle className="w-4 h-4" />
                        <span>Geomagnetic storm watch in effect</span>
                    </div>
                </div>
            )}
        </div>
    );
}