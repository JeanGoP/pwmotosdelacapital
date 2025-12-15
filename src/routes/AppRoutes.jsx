import React, { useRef, useState } from 'react';
import { Route, Routes, HashRouter as BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './../components/navbar';
import Footer from './../components/footer';
import { Home } from '../pages/home';
import {Cotizacion} from '../pages/cotizacion'
import { Administrador } from '../pages/administrador';
import { Promocion } from '../pages/promocion';
import { Login } from '../pages/login';
import { Conocenos } from '../pages/conocenos';
import ScrollToTop  from '../components/scrollToTop'
import RedirectToHome from '../components/redireccion';
import BotonFlotante from '../components/botonFlotante';
import { Motocicleta } from '../pages/motocicleta';
import ProtectedRoute from '../context/protectedRoute';
import {TratamientosDatos}from '../pages/tratamientosDatos'
import { Posventa } from '../pages/posventa';
import { Modelos } from '../pages/modelos';

function AppRoutesWrapper() {
  const location = useLocation();
  const path = location.pathname.toLowerCase().replace(/\/+$/, '');

  const ocultarLayout = path === '/login/administrador' || path === '/login';

  return (
    <>
        {!ocultarLayout && <Navbar />}
        {!ocultarLayout && <BotonFlotante />}
        <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/administrador" element={<ProtectedRoute><Administrador /></ProtectedRoute> } />
        <Route path="/login" element={<Login />} />
        <Route path="/promocion" element={<Promocion />} />
        <Route path="/cotizacion" element={<Cotizacion />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/motocicleta" element={<Motocicleta />} />
        <Route path="/tratamientosDatos" element={<TratamientosDatos />} />
        <Route path="/modelos" element={<Modelos />} />
        <Route path="/posventa" element={<Posventa />} />
        <Route path="*" element={<RedirectToHome />} />

        <Route
          path="*"
          element={
            <span style={{ fontSize: '100px' }}>
              <RedirectToHome />
            </span>
          }
        />
      </Routes>
      {!ocultarLayout && <Footer />}
    </>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <AppRoutesWrapper />
    </BrowserRouter>
  );
}

export default AppRoutes;
