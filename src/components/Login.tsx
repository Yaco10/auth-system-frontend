import axios from "axios";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setIsAuth} = useAuth();
    const data = {
        mail: email,
        password: password
    }
    const navigate = useNavigate()

    const passDatos = async (event: React.FormEvent) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('/users/login', data);
            if (response.status === 200) {
                console.log('Datos enviados correctamente:', response.data);
                setIsAuth(true);
                navigate("/menu"); 
            }
        } catch (error) {
            console.error('Hubo un error al enviar los datos:', error);
        }
    };
    
    

    return (
        <div >
            <form action="" onSubmit={passDatos} className="flex flex-col">
                <input type="text" placeholder="email" className="m-3 border-1 rounded-md" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" className="m-3 border-1 rounded-md" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}