import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
const nav = useNavigate();
const [form, setForm] = useState({
    profile_score: "",
    budget: "",
    country:"",
});

const submit = () => {
    localStorage.setItem("profile",
        JSON.stringify(form));
        nav("/dashboard");
};

return (
    <div>
        <h2>Onboarding</h2>
        <input 
        placeholder="Profile Score(0-100)"
        onChange={(e) =>
            setForm({ ...form,
            profile_score: e.target.value })
        } 
        />

             <input 
        placeholder="Budget"
        onChange={(e) =>
            setForm({ ...form,
            budget: e.target.value })
        } 

        />
        <input 
        placeholder="Preferred Country"
        onChange={(e) =>
            setForm({ ...form, country:
                e.target.value  })
        }
         />

         <button onClick={submit}>Complete Onboarding</button>

    </div>
);
}
