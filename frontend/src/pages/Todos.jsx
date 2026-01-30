import api from "../services/api";
import { useEffect, useState } from "react";

export default function Todos() {
    const [todos, setTodos] = useState([]);
useEffect(() => {
    api.get("/todos").then(res =>
        setTodos(res.data));

},[]);

return (
    <div>
        <h2>Application Tasks</h2>
        {todos.map((t, i) => (
            <div key={i}>
                <input type="checkbox" />
            </div>
        ))}
    </div>
);
}
