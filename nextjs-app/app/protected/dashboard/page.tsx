import { auth } from "../../../src/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await auth();

    if (!session) {
        redirect("/auth/signin");
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Dashboard - Protected Area
                        </h1>
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                            <p className="font-medium">Welcome to the protected area!</p>
                            <p className="text-sm">You are successfully authenticated.</p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h2 className="text-lg font-medium text-gray-900">User Information</h2>
                                <div className="mt-2 bg-gray-50 p-4 rounded">
                                    <p><strong>Email:</strong> {session.user?.email}</p>
                                    <p><strong>Name:</strong> {session.user?.name || "Not provided"}</p>
                                    <p><strong>User ID:</strong> {session.user?.id || "N/A"}</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-lg font-medium text-gray-900">Space Weather Data</h2>
                                <div className="mt-2 bg-blue-50 p-4 rounded">
                                    <p className="text-sm text-blue-700">
                                        This is where authenticated users can access real-time space weather data,
                                        personalized alerts, and advanced features.
                                    </p>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <a
                                    href="/api/auth/signout"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    Sign Out
                                </a>
                                <a
                                    href="/"
                                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Back to Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}