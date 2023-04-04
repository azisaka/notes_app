import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "custom",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith@test.pl" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const apiUrl = "http://localhost:5000/token"

                const token = await fetch(apiUrl, {
                    method: "POST",
                    mode: "cors",
                    body: JSON.stringify({
                        email: req.body.email,
                        password: req.body.password
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }) // login and get user data

                const data = await token.json()

                const user = {
                    access_token: data.token,
                };
                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            if (account) {
                token.account = {
                    ...account,
                    access_token: user.access_token  // <-- add token to JWT (Next's) object
                };
            }
            return token;
        },
        async session({ session, token }) {
            return { ...session, access_token: token.account.access_token };
        },
    },
});
