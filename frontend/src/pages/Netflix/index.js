import React from 'react';
import {FiPower} from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/netflix-logo.svg';
import SliderComponent from '../../components/SliderComponent';
import SliderComponent2 from '../../components/Slider2Component';
import './styles.css';

export default function Netflix(){
    const history = useHistory();
    const username = localStorage.getItem('username');

    function handleLogout(){
            localStorage.clear();
            history.push('/');
        }  
    
        return(
            <div className="netflix-container">
                <header>
                    <img src={logo} alt="Logo" />
                    <span>Bem vindo, {username}!</span>
    
                    <button onClick={handleLogout} type="button">
                        <FiPower size={18} color="#e21313" />
                    </button>
                </header>
    
                <h1>CATÁLOGO</h1>
                <div className="galeria">
                    <SliderComponent />
                </div>
                <div className="galeria">
                    <SliderComponent2 />
                </div>
                <div className="galeria">
                    <SliderComponent />
                </div>
            </div>  
        );         
}