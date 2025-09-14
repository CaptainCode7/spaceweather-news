import ApiTestComponent from "./components/ApiTestComponent";
import GetTimeComponent from "./components/GetTimeComponent";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Solar News | Real-time Space Weather Monitoring",
    description: "Monitor real-time space weather conditions, solar activity, and geomagnetic storms with our interactive dashboard and API testing interface.",
};

export default function HomePage() {
    const api = process.env.NEXT_PUBLIC_API_URL; // set after CDK deploy

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">SpaceWeather News</h1>
                        <p className="text-slate-300">Real-time space weather monitoring and alerts</p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/dashboard"
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            📊 Dashboard
                        </Link>
                        <Link
                            href="/api/space-weather"
                            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            🛰️ API
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Dashboard Preview */}
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                            🌞 Space Weather Dashboard
                        </h2>
                        <p className="text-slate-300 mb-6">
                            Monitor real-time solar activity, geomagnetic storms, and space weather conditions
                            that affect Earth&apos;s technology and communications.
                        </p>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                Solar flare monitoring
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                Geomagnetic activity tracking
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                Real-time alerts and warnings
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                Interactive activity charts
                            </div>
                        </div>
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                        >
                            View Dashboard →
                        </Link>
                    </div>

                    {/* API Testing */}
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                            🔧 API Testing
                        </h2>
                        <p className="text-slate-300 mb-4">
                            API URL: <span className="font-mono text-blue-400">{api ?? "(not set yet)"}</span>
                        </p>

                        <div className="space-y-4">
                            <ApiTestComponent />
                            <GetTimeComponent />
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6 text-center">
                        <div className="text-3xl mb-3">🌌</div>
                        <h3 className="text-lg font-semibold text-white mb-2">Real-time Data</h3>
                        <p className="text-sm text-slate-400">Live space weather data from multiple satellites and ground stations</p>
                    </div>
                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6 text-center">
                        <div className="text-3xl mb-3">⚡</div>
                        <h3 className="text-lg font-semibold text-white mb-2">Smart Alerts</h3>
                        <p className="text-sm text-slate-400">Intelligent notifications for significant space weather events</p>
                    </div>
                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6 text-center">
                        <div className="text-3xl mb-3">📈</div>
                        <h3 className="text-lg font-semibold text-white mb-2">Trend Analysis</h3>
                        <p className="text-sm text-slate-400">Historical data analysis and predictive modeling</p>
                    </div>
                </div>
            </div>
        </main>
    );
}