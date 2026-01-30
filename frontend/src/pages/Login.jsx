
import { useNavigate } from "react-router=dom";

export default function Login() {
    const nav = useNavigate();

    return (
        <div>
            <h2>Login</h2>
            <button onClick={() => nav("/onboarding")}>
                Continue
                </button>
        </div>
    );
}