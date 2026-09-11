import { useState } from 'react';
import './Login.css'; // 1. Importamos el archivo de estilos
import axios from 'axios'; // 2. Importamos axios para hacer peticiones HTTP
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react';




export function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    
    e.preventDefault();

    try {
      console.log("User:", user);
      console.log("Pass:", pass);

      navigate('/Menu'); 

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  }

  function handleClose() {
    window.close(); // Cierra la ventana actual
  }


useEffect(() => {
    // 1. Declaramos la función segura
    const getElectron = () => {
      if (window.require) {
        try {
          const { ipcRenderer } = window.require('electron');
          return ipcRenderer;
        } catch (e) {
          return null;
        }
      }
      return null;
    };

    // 2. La ejecutamos y guardamos el resultado
    const ipcRenderer = getElectron();

    // 3. Si Electron está disponible, mandamos los eventos
    if (ipcRenderer) {
      ipcRenderer.send('cambiar-titulo', 'Burbujitas - Login');
      ipcRenderer.send('cambiar-tamanio', { width: 500, height: 600 });
    }
  }, []);


  return (
    <div className="login-container">
      <div className="login-card">
        
        <button type="button" className="close-button" onClick={handleClose} aria-label="Cerrar">
          <span className="material-symbols-outlined">logout</span>
        </button>

        <img 
          src="src/Img/Burbuja.png" 
          alt="Logo de Login" 
          className="login-logo" 
        />

        <h2 className="login-title">Burbujitas</h2>
        
        <form onSubmit={handleSubmit} className="login-form">
          <input 
            className="login-input"
            value={user} 
            onChange={(e) => setUser(e.target.value)} 
            type="text" 
            placeholder="Usuario"
          />

          <input 
            className="login-input"
            value={pass} 
            onChange={(e) => setPass(e.target.value)} 
            type="password" 
            placeholder="Contraseña"
          />
          
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>

        <a href="#" className="login-link">Recuperar Contraseña</a>
        <p className="login-footer">© Alan Alfonso</p>
      </div>
    </div>
  );
}
