import Link from "next/link"; import Link from "next/link"; import ApiTestComponent from "./components/ApiTestComponent"; import ApiTestComponent from "./components/ApiTestComponent"; import ApiTestComponent from "./components/ApiTestComponent";



export default function HomePage() {

    return (

        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 flex items-center justify-center">export default function HomePage() {import GetTimeComponent from "./components/GetTimeComponent";

            <div className="max-w-2xl mx-auto px-6 text-center">

                <h1 className="text-5xl font-bold text-white mb-4">SpaceWeather News</h1>    return (

                <p className="text-xl text-slate-300 mb-8">

                    Real-time space weather monitoring and alerts        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 flex items-center justify-center">import Link from "next/link";import GetTimeComponent from "./components/GetTimeComponent";import GetTimeComponent from "./components/GetTimeComponent";

                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">            <div className="max-w-2xl mx-auto px-6 text-center">

                    <Link

                        href="/dashboard"                <h1 className="text-5xl font-bold text-white mb-4">SpaceWeather News</h1>

                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"

                    >                <p className="text-xl text-slate-300 mb-8">

                        📊 View Dashboard

                    </Link>                    Real-time space weather monitoring and alertsexport default function HomePage() {import Link from "next/link";import Link from "next/link";

                </div>

                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6">                <div className="flex flex-col sm:flex-row gap-4 justify-center">    const api = process.env.NEXT_PUBLIC_API_URL;

                        <div className="text-3xl mb-3">🌌</div>

                        <h3 className="text-lg font-semibold text-white mb-2">Real-time Data</h3>                    <Link

                            <p className="text-sm text-slate-400">Live space weather monitoring</p>

                    </div>                        href="/dashboard"

                        <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6">

                            <div className="text-3xl mb-3">⚡</div>                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"

                            <h3 className="text-lg font-semibold text-white mb-2">Smart Alerts</h3>

                            <p className="text-sm text-slate-400">Intelligent notifications</p>                    >    return (

                        </div>

                        <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6">                        📊 View Dashboard

                            <div className="text-3xl mb-3">📈</div>

                            <h3 className="text-lg font-semibold text-white mb-2">Trend Analysis</h3>                    </Link>        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">export default function HomePage() {export default function HomePage() {

                                <p className="text-sm text-slate-400">Historical data insights</p>

                    </div>                    <Link

                </div>

            </div>                        href="/api/space-weather"            <div className="max-w-4xl mx-auto px-6 py-12">

        </main>

    ); className = "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"

}
                    >                <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">    const api = process.env.NEXT_PUBLIC_API_URL; // set after CDK deploy    const api = process.env.NEXT_PUBLIC_API_URL; // set after CDK deploy

                        🛰️ API Documentation

                    </Link>                    <div>

                </div>

                                        <h1 className="text-4xl font-bold text-white mb-2">SpaceWeather News</h1>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6">                        <p className="text-slate-300">Real-time space weather monitoring and alerts</p>

                        <div className="text-3xl mb-3">🌌</div>

                        <h3 className="text-lg font-semibold text-white mb-2">Real-time Data</h3>                    </div>    return (    return (

                        <p className="text-sm text-slate-400">Live space weather monitoring</p>

                    </div>                    <div className="flex gap-4">

                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6">

                        <div className="text-3xl mb-3">⚡</div>                        <Link        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">

                        <h3 className="text-lg font-semibold text-white mb-2">Smart Alerts</h3>

                        <p className="text-sm text-slate-400">Intelligent notifications</p>                            href="/dashboard"

                    </div>

                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6">                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"            <div className="max-w-4xl mx-auto px-6 py-12">            <div className="max-w-4xl mx-auto px-6 py-12">

                        <div className="text-3xl mb-3">📈</div>

                        <h3 className="text-lg font-semibold text-white mb-2">Trend Analysis</h3>                        >

                        <p className="text-sm text-slate-400">Historical data insights</p>

                    </div>                            📊 Dashboard                <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">                <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

                </div>

            </div>                        </Link>

        </main>

    );                        <Link                    <div>                    <div>

}
                            href="/api/space-weather"

                            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"                        <h1 className="text-4xl font-bold text-white mb-2">SpaceWeather News</h1>                        <h1 className="text-4xl font-bold text-white mb-2">SpaceWeather News</h1>

                        >

                            🛰️ API                        <p className="text-slate-300">Real-time space weather monitoring and alerts</p>                        <p className="text-slate-300">Real-time space weather monitoring and alerts</p>

                        </Link>

                    </div>                    </div>                    </div >

                </div >

    <div className="flex gap-4">                    <div className="flex gap-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">                        <Link                        <Link

                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">

                    🌞 Space Weather Dashboard                            href="/dashboard"                            href="/dashboard"

                </h2>

                <p className="text-slate-300 mb-6">                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"

                    Monitor real-time solar activity, geomagnetic storms, and space weather conditions 

                            that affect Earth&apos;s technology and communications.                        >                        >

                </p>

                <div className="space-y-3 mb-6">                            📊 Dashboard                            📊 Dashboard

                    <div className="flex items-center gap-2 text-sm text-slate-400">

                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>                        </Link>                        </Link>

                Solar flare monitoring

            </div>                        <Link                        <Link

                            <div className="flex items-center gap-2 text-sm text-slate-400">

                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>                            href="/api/space-weather"                            href="/api/space-weather"

                Geomagnetic activity tracking

            </div>                            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"                            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"

            <div className="flex items-center gap-2 text-sm text-slate-400">

                <div className="w-2 h-2 bg-red-400 rounded-full"></div>                        >                        >

                Real-time alerts and warnings

            </div>                            🛰️ API                            🛰️ API

            <div className="flex items-center gap-2 text-sm text-slate-400">

                <div className="w-2 h-2 bg-green-400 rounded-full"></div>                        </Link>                        </Link>

        Interactive activity charts

    </div>                    </div>                    </div >

                        </div >

    <Link                </ div>                </div>

href = "/dashboard"

className = "inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"

    >

    View Dashboard →                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

    </Link>

    </div>                    {/* Dashboard Preview */ } {/* Dashboard Preview */ }



<div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">

    <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">

        🔧 API Testing                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">

        </h2>

            <p className="text-slate-300 mb-4">                            🌞 Space Weather Dashboard                            🌞 Space Weather Dashboard

                API URL: <span className="font-mono text-blue-400">{api ?? "(not set yet)"}</span>

            </p>                        </h2>                        </h2>

    <div className="space-y-4">

        <ApiTestComponent />                        <p className="text-slate-300 mb-6">                        <p className="text-slate-300 mb-6">

            <GetTimeComponent />

        </div>                            Monitor real-time solar activity, geomagnetic storms, and space weather conditions                             Monitor real-time solar activity, geomagnetic storms, and space weather conditions

    </div>

</div>                            that affect Earth&apos;s technology and communications.                            that affect Earth's technology and communications.



    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">                        </p>                        </p>

    <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6 text-center">

        <div className="text-3xl mb-3">🌌</div>                        <div className="space-y-3 mb-6">                        <div className="space-y-3 mb-6">

            <h3 className="text-lg font-semibold text-white mb-2">Real-time Data</h3>

            <p className="text-sm text-slate-400">Live space weather data from multiple satellites and ground stations</p>                            <div className="flex items-center gap-2 text-sm text-slate-400">                            <div className="flex items-center gap-2 text-sm text-slate-400">

            </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6 text-center">                                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>                                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>

                    <div className="text-3xl mb-3">⚡</div>

                    <h3 className="text-lg font-semibold text-white mb-2">Smart Alerts</h3>                                Solar flare monitoring                                Solar flare monitoring

                    <p className="text-sm text-slate-400">Intelligent notifications for significant space weather events</p>

                </div>                            </div>                            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6 text-center">

                <div className="text-3xl mb-3">📈</div>                            <div className="flex items-center gap-2 text-sm text-slate-400">                            <div className="flex items-center gap-2 text-sm text-slate-400">

                    <h3 className="text-lg font-semibold text-white mb-2">Trend Analysis</h3>

                    <p className="text-sm text-slate-400">Historical data analysis and predictive modeling</p>                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>

                </div>

                </div>                                Geomagnetic activity tracking                                Geomagnetic activity tracking

            </div>

        </main>                            </div>                            </div>

    );

}                            <div className="flex items-center gap-2 text-sm text-slate-400">                            <div className="flex items-center gap-2 text-sm text-slate-400">

                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>

                                Real-time alerts and warnings                                Real-time alerts and warnings

                            </div>                            </div>

                            <div className="flex items-center gap-2 text-sm text-slate-400">                            <div className="flex items-center gap-2 text-sm text-slate-400">

                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>

                                Interactive activity charts                                Interactive activity charts

                            </div>                            </div>

                        </div >                        </div >

    <Link                        <Link

                            href="/dashboard" href="/dashboard"

        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"

    >                        >

        View Dashboard →                            View Dashboard →

    </Link>                        </Link >

                    </div >                    </div >



    {/* API Testing */ }                    {/* API Testing */ }

<div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">

    <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">

        🔧 API Testing                            🔧 API Testing

    </h2>                        </h2>

    <p className="text-slate-300 mb-4">                        <p className="text-slate-300 mb-4">

        API URL: <span className="font-mono text-blue-400">{api ?? "(not set yet)"}</span>                            API URL: <span className="font-mono text-blue-400">{api ?? "(not set yet)"}</span>

    </p>                        </p>



    <div className="space-y-4">                        <div className="space-y-4">

        <ApiTestComponent />                            <ApiTestComponent />

        <GetTimeComponent />                            <GetTimeComponent />

    </div>                        </div>

</div>                    </div>

                </div >                </div >



    {/* Features Grid */ }                {/* Features Grid */ }

<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6 text-center">                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6 text-center">

        <div className="text-3xl mb-3">🌌</div>                        <div className="text-3xl mb-3">🌌</div>

        <h3 className="text-lg font-semibold text-white mb-2">Real-time Data</h3>                        <h3 className="text-lg font-semibold text-white mb-2">Real-time Data</h3>

        <p className="text-sm text-slate-400">Live space weather data from multiple satellites and ground stations</p>                        <p className="text-sm text-slate-400">Live space weather data from multiple satellites and ground stations</p>

    </div>                    </div>

    <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6 text-center">                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6 text-center">

        <div className="text-3xl mb-3">⚡</div>                        <div className="text-3xl mb-3">⚡</div>

        <h3 className="text-lg font-semibold text-white mb-2">Smart Alerts</h3>                        <h3 className="text-lg font-semibold text-white mb-2">Smart Alerts</h3>

        <p className="text-sm text-slate-400">Intelligent notifications for significant space weather events</p>                        <p className="text-sm text-slate-400">Intelligent notifications for significant space weather events</p>

    </div>                    </div>

    <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6 text-center">                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6 text-center">

        <div className="text-3xl mb-3">📈</div>                        <div className="text-3xl mb-3">📈</div>

        <h3 className="text-lg font-semibold text-white mb-2">Trend Analysis</h3>                        <h3 className="text-lg font-semibold text-white mb-2">Trend Analysis</h3>

        <p className="text-sm text-slate-400">Historical data analysis and predictive modeling</p>                        <p className="text-sm text-slate-400">Historical data analysis and predictive modeling</p>

    </div>                    </div>

</div>                </div>

            </div >            </div >

        </main >        </main >

    );    );

}}
onClick = { async() => {
    const url = api ? `${api}/hello` : "/api/local-echo";
    const res = await fetch(url + (api ? "" : ""), { cache: "no-store" });
    const data = await res.json();
    alert(JSON.stringify(data, null, 2));
}}
className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mb-4"
    >
    Call API(Simple)
                    </button >

    {/* Time endpoint component */ }
    < GetTimeComponent />

    {/* New typed component with error handling and loading state */ }
    < ApiTestComponent />

    <p className="text-sm text-gray-600 mt-4">
        Tip: set <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_API_URL</code> after deploying CDK to call your real endpoint.
    </p>
                </div >

    { session && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-green-800 mb-2">
                🔒 Authenticated Features Available
            </h3>
            <p className="text-green-700 mb-2">
                You have access to protected endpoints and personalized content.
            </p>
            <Link
                href="/protected/dashboard"
                className="text-green-600 underline hover:text-green-800"
            >
                Access your dashboard →
            </Link>
        </div>
    )}
            </div >
        </main >
    );
}