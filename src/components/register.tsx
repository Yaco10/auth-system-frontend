import axios from "axios";
import { useState } from "react";
    
export function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const obtenerDatos = (e: string) => {
        const dato = e;
        return dato;
    }

    return (
        <div >
            <form action="" className="flex flex-col">
                <input type="text" placeholder="username" className="m-3 border-1 rounded-md" onChange={(e) => obtenerDatos(e.target.value)}/>
                <input type="text" placeholder="email" className="m-3 border-1 rounded-md" onChange={(e) => obtenerDatos(e.target.value)}/>
                <input type="password" placeholder="password" className="m-3 border-1 rounded-md" onChange={(e) => obtenerDatos(e.target.value)}/>
                <button>Register</button>
            </form>
        </div>
    )
}