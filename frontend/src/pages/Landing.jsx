
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const nav = useNavigate();

    return(
        <div>
            <h1>AI Study Abroad Counsellor</h1>
        <p>From confusion to clarity</p>
        <button onClick={() => nav("/login")}>Get Started</button>
        
        </div>
        
    );
}