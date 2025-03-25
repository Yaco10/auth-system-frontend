import axios from "axios";
import { useState } from "react";
    
export function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const data = {
        name: username,
        mail: email,
        password: password
    }

    const passDatos = (event: React.FormEvent) => {
        event.preventDefault()
        axios.post('/users/register', data)
            .then(response => {
                console.log('Datos enviados correctamente:', response.data);
            })
            .catch(error => {
                console.error('Hubo un error al enviar los datos:', error);
            });
    }

    return (
        <div >
            <form action="" onSubmit={passDatos} className="flex flex-col">
                <input type="text" placeholder="username" className="m-3 border-1 rounded-md" onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" placeholder="email" className="m-3 border-1 rounded-md" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" className="m-3 border-1 rounded-md" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}