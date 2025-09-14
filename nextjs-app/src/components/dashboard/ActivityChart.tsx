'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';

interface ChartData {
    time: string;
    kIndex: number;
    solarWind: number;
    protonFlux: number;
}

export default function ActivityChart() {
    const [timeRange, setTimeRange] = useState<'6h' | '24h' | '7d'>('24h');
    const [selectedMetric, setSelectedMetric] = useState<'kIndex' | 'solarWind' | 'protonFlux'>('kIndex');
    const [chartData, setChartData] = useState<ChartData[]>([]);
    const [isClient, setIsClient] = useState(false);

    // Mock data - replace with real API data
    const generateMockData = (timeRange: string): ChartData[] => {
        const data: ChartData[] = [];
        const now = new Date();
        const hours = timeRange === '6h' ? 6 : timeRange === '24h' ? 24 : 168;

        for (let i = hours; i >= 0; i--) {
            const time = new Date(now.getTime() - i * 60 * 60 * 1000);
            data.push({
                time: time.toISOString(),
                kIndex: Math.random() * 6 + 1,
                solarWind: Math.random() * 400 + 300,
                protonFlux: Math.random() * 5 + 0.1
            });
        }
        return data;
    };

    // Generate data only on client side to avoid hydration mismatch
    useEffect(() => {
        setIsClient(true);
        setChartData(generateMockData(timeRange));
    }, [timeRange]);

    // Don't render chart until client-side
    if (!isClient) {
        return (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
                <div className="animate-pulse">
                    <div className="h-6 bg-slate-700 rounded w-32 mb-6"></div>
                    <div className="h-48 bg-slate-700 rounded"></div>
                </div>
            </div>
        );
    }

    const getMetricConfig = (metric: string) => {
        switch (metric) {
            case 'kIndex':
                return {
                    label: 'K-Index',
                    color: 'from-orange-500 to-red-500',
                    unit: '',
                    max: 9
                };
            case 'solarWind':
                return {
                    label: 'Solar Wind Speed',
                    color: 'from-blue-500 to-cyan-500',
                    unit: 'km/s',
                    max: 800
                };
            case 'protonFlux':
                return {
                    label: 'Proton Flux',
                    color: 'from-green-500 to-emerald-500',
                    unit: 'pfu',
                    max: 10
                };
            default:
                return {
                    label: 'K-Index',
                    color: 'from-orange-500 to-red-500',
                    unit: '',
                    max: 9
                };
        }
    };

    const config = getMetricConfig(selectedMetric);
    const maxValue = Math.max(...chartData.map(d => d[selectedMetric]));
    const normalizedMax = Math.max(maxValue, config.max * 0.5);

    return (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-green-400" />
                    Activity Trends
                </h3>

                <div className="flex flex-wrap gap-2">
                    {/* Metric selector */}
                    <div className="flex bg-slate-700/50 rounded-lg p-1">
                        {(['kIndex', 'solarWind', 'protonFlux'] as const).map((metric) => (
                            <button
                                key={metric}
                                onClick={() => setSelectedMetric(metric)}
                                className={`px-3 py-1 rounded text-xs font-medium transition-all ${selectedMetric === metric
                                        ? 'bg-slate-600 text-white'
                                        : 'text-slate-400 hover:text-slate-200'
                                    }`}
                            >
                                {getMetricConfig(metric).label}
                            </button>
                        ))}
                    </div>

                    {/* Time range selector */}
                    <div className="flex bg-slate-700/50 rounded-lg p-1">
                        {(['6h', '24h', '7d'] as const).map((range) => (
                            <button
                                key={range}
                                onClick={() => setTimeRange(range)}
                                className={`px-3 py-1 rounded text-xs font-medium transition-all ${timeRange === range
                                        ? 'bg-slate-600 text-white'
                                        : 'text-slate-400 hover:text-slate-200'
                                    }`}
                            >
                                {range}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Chart area */}
            <div className="relative h-48 bg-slate-900/30 rounded-lg p-4">
                <div className="absolute inset-4">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-500">
                        <span>{normalizedMax.toFixed(1)}</span>
                        <span>{(normalizedMax * 0.75).toFixed(1)}</span>
                        <span>{(normalizedMax * 0.5).toFixed(1)}</span>
                        <span>{(normalizedMax * 0.25).toFixed(1)}</span>
                        <span>0</span>
                    </div>

                    {/* Chart bars */}
                    <div className="ml-8 h-full flex items-end gap-0.5">
                        {chartData.map((point, index) => {
                            const height = (point[selectedMetric] / normalizedMax) * 100;
                            return (
                                <div
                                    key={index}
                                    className="flex-1 group relative cursor-pointer"
                                >
                                    <div
                                        className={`w-full bg-gradient-to-t ${config.color} rounded-t transition-all duration-300 hover:opacity-80`}
                                        style={{ height: `${height}%` }}
                                    ></div>

                                    {/* Tooltip */}
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-slate-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                        <div>{point[selectedMetric].toFixed(2)} {config.unit}</div>
                                        <div className="text-slate-400">
                                            {new Date(point.time).toLocaleTimeString('en-US', {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Grid lines */}
                    <div className="absolute inset-0 ml-8">
                        {[0.25, 0.5, 0.75].map((fraction) => (
                            <div
                                key={fraction}
                                className="absolute left-0 right-0 border-t border-slate-700/30"
                                style={{ bottom: `${fraction * 100}%` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Current value and trend */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700/50">
                <div className="flex items-center gap-3">
                    <div>
                        <div className="text-sm text-slate-400">Current {config.label}</div>
                        <div className="text-xl font-bold text-white">
                            {chartData[chartData.length - 1]?.[selectedMetric].toFixed(2)} {config.unit}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">+12% from avg</span>
                </div>
            </div>
        </div>
    );
}