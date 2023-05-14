// ? Notes:
// * 1. [nextauth] is a special folder name that NextAuth.js will use to dynamically create the API route
// * ie. /api/auth/signin, /api/auth/signout, /api/auth/callback, /api/auth/session

import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'


export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
}


const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}
