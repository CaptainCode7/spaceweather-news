import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        message: 'Hello from Space Weather API!',
        timestamp: new Date().toISOString(),
        success: true,
        source: 'local-nextjs-api'
    });
}

export async function OPTIONS() {
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}