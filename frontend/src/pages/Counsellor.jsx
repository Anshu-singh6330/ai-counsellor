import api from "../services/api";
import { useEffect, useState } from "react";

export default function Counsellor() {
    const [result, setResult] =
    useState(null);

    useEffect(() => {
        const profile =
        JSON.parse(localStorage.getItem("profile"));

        api.post("/ai/analyze-profile",profile)
        .then(res => {
                console.log("API response:", res.data);
                
             setResult(res.data);
            })
            .catch(err => console.error(err));
        }, []);


    return (
        <div>
            <h2>AI Counsellor</h2>
            {result && (
                <>
                <h4>Strengths</h4>
                <ul>
                    {result?.strength?.map((s, i) => (
                        <li key={i}>{s}</li>
                    ))}
                
                </ul>
                <h4>Gaps</h4>
                <ul>
                    {result.gaps.map((g,i) => (
                        <li key={i}>{g}</li>

                    ))}
                </ul>
                <p>{result.advice}</p>
                </>
            )}
        </div>
    );

};