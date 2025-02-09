import { useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"

export const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return <div>
        <input onChange={(e) => {
            setEmail(e.target.value);
        }} type="text" placeholder="email" />
        <input onChange={(e) => {
            setPassword(e.target.value);
        }} type="password" placeholder="password" />
        <button onClick={async () => {
            await axios.post(`${BACKEND_URL}/api/v1/users/session`, {
                email,
                password
            }, {
                withCredentials: true,
            });
            alert("you are logged in")
        }}>Submit</button>
    </div>
}