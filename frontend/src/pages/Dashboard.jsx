import { useNavigate } from "react-router-dom";

export default function Dashboard(){
    const nav = useNavigate();

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                <li>Onboarding Completed</li>
                <li>AI Counsellor</li>
                <li>University Selection</li>
                <li>LOck University</li>
            </ul>

            <button onClick={() => nav("/counsellor")}>Talk to AI Counsellor</button>
        </div>
    );
}
