import { NextResponse } from 'next/server'

export default async function midleware(req) {
    const jwt = req.cookies.get('OursiteJWT')?.value

    const url = req.url

    if (url.includes("/login")) {
        if (jwt) {
            return NextResponse.redirect('http://localhost:3000/')
        }
    }

    if (url.includes("/dashboard")) {
        if (jwt === undefined)
            return NextResponse.redirect('http://localhost:3000/login')
    }
    
    return NextResponse.next()
}