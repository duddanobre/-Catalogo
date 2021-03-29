import React, { useState } from 'react';
import {Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import '../../global.css';
import logo from '../../assets/netflix-logo.svg';

import api from '../../services/api';

export default function Register(){

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            username,
            name,
            email,
        };

        try {
            const response = await api.post('users', data);
            alert(`Usuário: ${response.data.username} cadastrado`);
            history.push('/');
        } catch (error) {
            alert('Erro ao se cadastrar.');
        }

    }

    return(
        <div className="register-container">
            <div className="logo">
                <img src={logo} alt="Netflix" />
            </div>
            <div className="content">
                <section>

                    <h1>Cadastro</h1>
                    <p>Registre-se para utilizar a plataforma</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e21313"/>
                        Já tenho Cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Digite seu usernome" 
                    value={username} onChange={e => setUsername(e.target.value)}
                    />
                    <input type="nome" placeholder="Digite seu nome" 
                    value={name} onChange={e => setName(e.target.value)}
                    />
                    <input placeholder="Digite seu email" 
                    value={email} onChange={e => setEmail(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );

}