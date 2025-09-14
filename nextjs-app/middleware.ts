import { auth } from "./src/auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
    const session = await auth()

    // Check if user is trying to access protected routes
    if (request.nextUrl.pathname.startsWith('/protected')) {
        if (!session) {
            return NextResponse.redirect(new URL('/auth/signin', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/protected/:path*']
}