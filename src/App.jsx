import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login'; 
import ProductTable from './components/ProductTable';


function App() {
  // Función para verificar la autenticación del usuario
  const isAuthenticated = () => {
    return localStorage.getItem('token') ? true : false;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Protege la ruta de ProductTable utilizando una función de enrutamiento condicional */}
        <Route
          path="productTable"
          element={
            isAuthenticated() ? (
              <ProductTable />
            ) : (
              // Si el usuario no está autenticado, redirige al inicio de sesión
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
