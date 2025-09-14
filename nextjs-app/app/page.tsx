import { auth } from "../src/auth";
import ApiTestComponent from "./components/ApiTestComponent";
import GetTimeComponent from "./components/GetTimeComponent";
import Link from "next/link";

export default async function HomePage() {
    const session = await auth();
    const api = process.env.NEXT_PUBLIC_API_URL; // set after CDK deploy

    return (
        <main style={{ padding: 24 }}>
            <div className="max-w-4xl mx-auto">
                <div className="mb-6 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">Spaceweather News</h1>
                    <div className="space-x-4">
                        {session ? (
                            <>
                                <span className="text-sm text-gray-600">
                                    Welcome, {session.user?.email}
                                </span>
                                <Link
                                    href="/protected/dashboard"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Dashboard
                                </Link>
                                <a
                                    href="/api/auth/signout"
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Sign Out
                                </a>
                            </>
                        ) : (
                            <Link
                                href="/auth/signin"
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">API Testing</h2>
                    <p className="mb-4">API URL: {api ?? "(not set yet)"}</p>

                    {/* Original simple button */}
                    <button
                        onClick={async () => {
                            const url = api ? `${api}/hello` : "/api/local-echo";
                            const res = await fetch(url + (api ? "" : ""), { cache: "no-store" });
                            const data = await res.json();
                            alert(JSON.stringify(data, null, 2));
                        }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mb-4"
                    >
                        Call API (Simple)
                    </button>

                    {/* Time endpoint component */}
                    <GetTimeComponent />

                    {/* New typed component with error handling and loading state */}
                    <ApiTestComponent />

                    <p className="text-sm text-gray-600 mt-4">
                        Tip: set <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_API_URL</code> after deploying CDK to call your real endpoint.
                    </p>
                </div>

                {session && (
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
            </div>
        </main>
    );
}