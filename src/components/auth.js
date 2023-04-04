import { useSession, signIn } from "next-auth/react"

export default function Auth({ children }) {
    const { data: session } = useSession()

    if (session) {
        return children
    }
    
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}