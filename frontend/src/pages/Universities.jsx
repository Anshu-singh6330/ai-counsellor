import api from "../services/api.js";
import { useEffect, useState } from "react";

export default function Universities() {
    const [unis, setUnis] = useState([]);
    const [locked, setLocked ]= useState(null);

    useEffect(() => {
        const profile =
        JSON.parse(localStorage.getItem("profile"));
        api.post("/universities/filter", profile)
        .then(res => setUnis(res.data));
    }, []);
    
    const lockUni = (u) => {
        setLocked(u.name);
        localStorage.setItem("locked",u.name);
    };

    return (
        <div>
            <h2>Universities</h2>
            {unis.map((u,i) => (
                <div key={i}> 
                <h4>{u.name}</h4>
                <p>{u.country} | ${u.cost} | {u.risk}</p>
                <button onClick={() =>
                    lockUni(u)}>Lock</button>
                </div>
            ))}
            {locked && <p> Locked: {locked}</p>}
        </div>
    );
}
