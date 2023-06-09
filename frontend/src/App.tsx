import React, { Suspense, useContext, useEffect, useState} from 'react'
import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ProtectedRoute } from './middleware/ProtectedRoute'

import { CartProvider, CartContext  } from './context/CartContext';

import routes from './routes/routes'

import './assets/css/tailwind.scss'

function App() {
  
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                  <route.layout>
                    {route.protected && <ProtectedRoute> <route.component/> </ProtectedRoute>}
                    {!route.protected && <route.component/>}
                  </route.layout>
                  }
                />
              )
            })}
          </Routes>
      </BrowserRouter>
      </div>
    </CartProvider>
  );
}

function WrappedApp() {
  
  // Suspense usado para lazy loading de componentes (https://pt-br.reactjs.org/docs/code-splitting.html#reactlazy)
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  )
}

export default WrappedApp

