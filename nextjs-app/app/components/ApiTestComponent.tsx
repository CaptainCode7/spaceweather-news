"use client";

import { useState } from "react";

interface ApiResponse {
    message: string;
}

export default function ApiTestComponent() {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleApiCall = async () => {
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            if (!apiUrl) {
                throw new Error("API URL not configured");
            }

            // Note: Do NOT set Content-Type on a GET. That triggers a CORS preflight (OPTIONS)
            // which will fail unless the API explicitly supports it. Keep this a simple request.
            const response = await fetch(`${apiUrl}/hello`, {
                cache: "no-store",
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result: ApiResponse = await response.json();
            setData(result);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", margin: "20px 0" }}>
            <h3>API Test Component</h3>

            <button
                onClick={handleApiCall}
                disabled={loading}
                style={{
                    padding: "10px 20px",
                    backgroundColor: loading ? "#ccc" : "#007acc",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: loading ? "not-allowed" : "pointer",
                }}
            >
                {loading ? "Loading..." : "Call API"}
            </button>

            {loading && (
                <div style={{ marginTop: "10px", color: "#666" }}>
                    Fetching data...
                </div>
            )}

            {error && (
                <div style={{ marginTop: "10px", color: "red", padding: "10px", backgroundColor: "#fee" }}>
                    <strong>Error:</strong> {error}
                </div>
            )}

            {data && (
                <div style={{ marginTop: "10px", color: "green", padding: "10px", backgroundColor: "#efe" }}>
                    <strong>Success:</strong>
                    <pre style={{ marginTop: "5px", fontSize: "14px" }}>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}