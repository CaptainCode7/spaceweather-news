"use client";

import { useState } from "react";

interface TimeResponse {
    timestamp: string;
    message: string;
}

export default function GetTimeComponent() {
    const [timeData, setTimeData] = useState<TimeResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleGetTime = async () => {
        setLoading(true);
        setError(null);
        setTimeData(null);

        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!apiUrl) {
            setError("API URL not configured");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/time`, {
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result: TimeResponse = await response.json();
            setTimeData(result);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            margin: "15px 0",
            backgroundColor: "#f9f9f9"
        }}>
            <h4 style={{ margin: "0 0 10px 0" }}>Time Endpoint Test</h4>

            <button
                onClick={handleGetTime}
                disabled={loading}
                style={{
                    padding: "8px 16px",
                    backgroundColor: loading ? "#ccc" : "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: loading ? "not-allowed" : "pointer",
                    fontSize: "14px",
                }}
            >
                {loading ? "Getting Time..." : "Get Current Time"}
            </button>

            {loading && (
                <div style={{ marginTop: "10px", color: "#666", fontSize: "14px" }}>
                    🕐 Fetching current timestamp...
                </div>
            )}

            {error && (
                <div style={{
                    marginTop: "10px",
                    color: "#dc3545",
                    padding: "8px",
                    backgroundColor: "#f8d7da",
                    borderRadius: "4px",
                    fontSize: "14px"
                }}>
                    <strong>❌ Error:</strong> {error}
                </div>
            )}

            {timeData && (
                <div style={{
                    marginTop: "10px",
                    color: "#155724",
                    padding: "10px",
                    backgroundColor: "#d4edda",
                    borderRadius: "4px"
                }}>
                    <strong>✅ Current Time:</strong>
                    <div style={{ marginTop: "5px", fontFamily: "monospace", fontSize: "14px" }}>
                        <div><strong>Timestamp:</strong> {timeData.timestamp}</div>
                        <div><strong>Message:</strong> {timeData.message}</div>
                        <div style={{ marginTop: "5px", fontSize: "12px", color: "#666" }}>
                            <strong>Local Time:</strong> {new Date(timeData.timestamp).toLocaleString()}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}