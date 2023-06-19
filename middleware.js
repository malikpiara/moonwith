import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

/* This code is creating a middleware function using Next.js Edge Middleware. Middleware lets you run server-side code before your request handler. The code essentially checks the authentication state of a user and redirects them based on their current path and whether they're signed in. */

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // if user is signed in and the current path is / redirect the user to /account
  if (user && req.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/account', req.url))
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && req.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return res
}

// Determines the routes this middleware applies to.
export const config = {
  matcher: ['/account', '/admin/:path*'],
}