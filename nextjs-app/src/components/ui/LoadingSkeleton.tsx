export default function LoadingSkeleton() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header skeleton */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-slate-700 rounded-lg animate-pulse"></div>
                                <div className="h-8 w-64 bg-slate-700 rounded animate-pulse"></div>
                            </div>
                            <div className="h-4 w-80 bg-slate-700 rounded animate-pulse"></div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 w-24 bg-slate-700 rounded animate-pulse"></div>
                            <div className="h-3 w-32 bg-slate-700 rounded animate-pulse"></div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-6 w-28 bg-slate-700 rounded-full animate-pulse"></div>
                        ))}
                    </div>
                </div>

                {/* Cards grid skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Solar Activity Card skeleton */}
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-slate-700 rounded animate-pulse"></div>
                                <div className="h-5 w-32 bg-slate-700 rounded animate-pulse"></div>
                            </div>
                            <div className="w-4 h-4 bg-slate-700 rounded animate-pulse"></div>
                        </div>

                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between">
                                        <div className="h-4 w-20 bg-slate-700 rounded animate-pulse"></div>
                                        <div className="h-4 w-16 bg-slate-700 rounded animate-pulse"></div>
                                    </div>
                                    <div className="h-2 w-full bg-slate-700 rounded-full animate-pulse"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Geomagnetic Card skeleton */}
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-slate-700 rounded animate-pulse"></div>
                                <div className="h-5 w-40 bg-slate-700 rounded animate-pulse"></div>
                            </div>
                            <div className="h-4 w-16 bg-slate-700 rounded animate-pulse"></div>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <div className="h-4 w-24 bg-slate-700 rounded animate-pulse"></div>
                                    <div className="h-5 w-16 bg-slate-700 rounded animate-pulse"></div>
                                </div>
                                <div className="h-8 w-20 bg-slate-700 rounded animate-pulse"></div>
                                <div className="h-3 w-full bg-slate-700 rounded-full animate-pulse"></div>
                            </div>

                            {[1, 2].map((i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between">
                                        <div className="h-4 w-16 bg-slate-700 rounded animate-pulse"></div>
                                        <div className="h-4 w-12 bg-slate-700 rounded animate-pulse"></div>
                                    </div>
                                    <div className="h-3 w-24 bg-slate-700 rounded animate-pulse"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Alerts Card skeleton */}
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-slate-700 rounded animate-pulse"></div>
                                <div className="h-5 w-28 bg-slate-700 rounded animate-pulse"></div>
                                <div className="w-6 h-5 bg-slate-700 rounded-full animate-pulse"></div>
                            </div>
                            <div className="h-4 w-12 bg-slate-700 rounded animate-pulse"></div>
                        </div>

                        <div className="space-y-3">
                            {[1, 2].map((i) => (
                                <div key={i} className="p-4 rounded-lg border border-slate-700">
                                    <div className="flex items-start gap-3">
                                        <div className="w-5 h-5 bg-slate-700 rounded animate-pulse mt-0.5"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div className="h-4 w-32 bg-slate-700 rounded animate-pulse"></div>
                                                <div className="h-4 w-16 bg-slate-700 rounded-full animate-pulse"></div>
                                            </div>
                                            <div className="h-4 w-full bg-slate-700 rounded animate-pulse"></div>
                                            <div className="h-3 w-3/4 bg-slate-700 rounded animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Chart skeleton */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-slate-700 rounded animate-pulse"></div>
                            <div className="h-5 w-32 bg-slate-700 rounded animate-pulse"></div>
                        </div>

                        <div className="flex gap-2">
                            <div className="h-8 w-32 bg-slate-700 rounded-lg animate-pulse"></div>
                            <div className="h-8 w-24 bg-slate-700 rounded-lg animate-pulse"></div>
                        </div>
                    </div>

                    <div className="h-48 bg-slate-900/30 rounded-lg p-4">
                        <div className="h-full flex items-end gap-1">
                            {Array.from({ length: 24 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex-1 bg-slate-700 rounded-t animate-pulse"
                                    style={{
                                        height: `${Math.random() * 80 + 20}%`,
                                        animationDelay: `${i * 0.1}s`
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between mt-4 pt-4 border-t border-slate-700/50">
                        <div className="space-y-1">
                            <div className="h-4 w-24 bg-slate-700 rounded animate-pulse"></div>
                            <div className="h-6 w-20 bg-slate-700 rounded animate-pulse"></div>
                        </div>
                        <div className="h-5 w-28 bg-slate-700 rounded animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}