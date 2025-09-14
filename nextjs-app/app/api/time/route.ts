import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        message: 'Current time response',
        time: new Date().toISOString(),
        utc: new Date().toUTCString(),
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