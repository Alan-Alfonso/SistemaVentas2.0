import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

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

export function Menu() {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);

 useEffect(() => {
    const ipcRenderer = getElectron();
    if (ipcRenderer) {
      ipcRenderer.send('cambiar-titulo', 'Burbujitas - Menu');
      ipcRenderer.send('cambiar-tamanio', { width: 1280, height: 720 });
      ipcRenderer.send('expandir-menu-completo'); // <--- Esto estira la ventana al máximo
    }
  }, []);

  const handleCardClick = (cardName) => {
    setActiveCard(activeCard === cardName ? null : cardName);
  };

  return (
    <div className="menu-wrapper">
      <div style={{ width: '100%', maxWidth: '1100px', display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <button className="split-half" style={{ maxWidth: '160px', borderRadius: '10px', background: '#e57373', color: '#fff', padding: '10px' }} onClick={() => navigate('/')}>
          Cerrar Sesión
        </button>
      </div>

      <div className="menu-grid">
        {/* 1. VENTAS */}
        <div className="card card-red" onClick={() => handleCardClick('ventas')}>
          {activeCard === 'ventas' ? (
            <div className="card-split-container" onClick={(e) => e.stopPropagation()}>
              <button className="split-half left" onClick={() => alert('Registrar Venta')}>Registrar Venta</button>
              <button className="split-half right" onClick={() => alert('Historial')}>Historial</button>
            </div>
          ) : (
            <div className="card-front">
              <h2>Ventas</h2>
              <span>Hacer clic para partir</span>
            </div>
          )}
        </div>

        {/* 2. PRODUCTOS */}
        <div className="card card-green" onClick={() => handleCardClick('productos')}>
          {activeCard === 'productos' ? (
            <div className="card-split-container" onClick={(e) => e.stopPropagation()}>
              <button className="split-half left" onClick={() => alert('Crear Producto')}>Crear Producto</button>
              <button className="split-half right" onClick={() => alert('Gestionar Stock')}>Stock</button>
            </div>
          ) : (
            <div className="card-front">
              <h2>Productos</h2>
              <span>Hacer clic para partir</span>
            </div>
          )}
        </div>

        {/* 3. CATEGORÍAS */}
        <div className="card card-blue" onClick={() => handleCardClick('categorias')}>
          {activeCard === 'categorias' ? (
            <div className="card-split-container" onClick={(e) => e.stopPropagation()}>
              <button className="split-half left" onClick={() => alert('Crear Categoría')}>Crear Categoría</button>
              <button className="split-half right" onClick={() => alert('Gestionar Categoría')}>Gestionar</button>
            </div>
          ) : (
            <div className="card-front">
              <h2>Categorías</h2>
              <span>Hacer clic para partir</span>
            </div>
          )}
        </div>

        {/* 4. CAJA / REPORTES */}
        <div className="card card-yellow" onClick={() => handleCardClick('caja')}>
          {activeCard === 'caja' ? (
            <div className="card-split-container" onClick={(e) => e.stopPropagation()}>
              <button className="split-half left" onClick={() => alert('Cierre de Caja')}>Cierre de Caja</button>
              <button className="split-half right" onClick={() => alert('Reportes')}>Reportes</button>
            </div>
          ) : (
            <div className="card-front">
              <h2>Caja / Reportes</h2>
              <span>Hacer clic para partir</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}