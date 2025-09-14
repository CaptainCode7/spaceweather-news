"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
        setLoading(true);
        try {
            await signIn("cognito", {
                callbackUrl: "/protected/dashboard",
                redirect: true
            });
        } catch (error) {
            console.error("Sign in error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to Spaceweather News
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Access the latest space weather data and alerts
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    <button
                        onClick={handleSignIn}
                        disabled={loading}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Signing in..." : "Sign in with AWS Cognito"}
                    </button>
                </div>
            </div>
        </div>
    );
}