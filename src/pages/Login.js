import { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form>
            <div>
                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <input type="submit" value="Log In" />
            </div>
        </form>
    )
}

export default Login