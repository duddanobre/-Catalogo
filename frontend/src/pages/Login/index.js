import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import api from '../../services/api';

import '../../global.css';
import './styles.css';

import logo from '../../assets/netflix-logo.svg';

export default function Login(){

   const [username, setUsername] = useState('');
   const history = useHistory();
    
   async function handleLogin(e){
    e.preventDefault();

    try{
        const response = await api.post('login', { username });
        localStorage.setItem('username', username);
        localStorage.setItem('Name', response.data.name);

        history.push('/series');
    }catch(err) {
        alert('Falha no Login.');
    }
};

return(

    <div className="logon-container">

        <div className="logo">
           <img src={logo} alt="Netflix" width="50%" />
        </div>
        <div className="content"> 
            <section className="form">
                <form onSubmit={handleLogin}>
                <h1>Faça seu Login</h1>

                <input placeholder="username"
                value={username} onChange={e => setUsername(e.target.value)}></input>
                <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e21313"/>
                        Não tenho Cadastro
                    </Link>
                </form>
            </section>
        </div>
    </div> 
);

}