import { signIn } from "next-auth/react"

const NewUserForm = () => {
    const state = {}

    const handleChangeName = (event) => {
        state["name"] = event.target.value
    }

    const handleChangeEmail = (event) => {
        state["email"] = event.target.value
    }

    const handleChangePassword = (event) => {
        state["password"] = event.target.value
    }

    const handleChangePasswordConfirmation = (event) => {
        state["password_confirmation"] = event.target.value
    }

    const handleSubmit = (event) => {
        console.log(state)
        signIn('custom', { email: state.email, callbackUrl: 'http://localhost:3000/categories' })

        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" onChange={handleChangeName} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" onChange={handleChangeEmail} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" onChange={handleChangePassword} />
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" onChange={handleChangePasswordConfirmation} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default function NewUser() {
    return (
        <NewUserForm />
    )
}