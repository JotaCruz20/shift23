import React, { Suspense} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { ProtectedRoute } from './middleware/ProtectedRoute'

import routes from './routes/routes'

import './assets/css/tailwind.scss'

function App() {

  return (
    <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                  <route.layout title={route.name}>
                    {route.protected && <ProtectedRoute> <route.component/> </ProtectedRoute>}
                    {!route.protected && <route.component/>}
                  </route.layout>
                  }
                />
              )
            })}
          </Routes>
      </BrowserRouter>
    </DndProvider>
  )
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
