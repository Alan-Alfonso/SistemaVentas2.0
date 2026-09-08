import { useState } from 'react';
import './Login.css'; // 1. Importamos el archivo de estilos

export function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("User:", user);
    console.log("Pass:", pass);
  }

    function handleClose() {
    window.close(); // Cierra la ventana actual
  }

  return (
    <div className="login-container">
      <div className="login-card">
        
        <button type="button" className="close-button" onClick={handleClose} aria-label="Cerrar">
          <span className="material-symbols-outlined">logout</span>
        </button>

        <img 
          src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" 
          alt="Logo de Login" 
          className="login-logo" 
        />

        <h2 className="login-title">Sistema de Venta</h2>
        
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
      </div>
    </div>
  );
}