import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
        <h1>Welcom to Phonebook App!</h1>
            <p>Please register</p>
            <button type="button" onClick={() => { navigate("register") }}>Register</button>
            <p>or login App</p>
            <button type="button" onClick={() => { navigate("login") }}>Login</button>
            </>
    )
}