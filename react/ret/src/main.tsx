import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App />} />

        <Route path='/analytics' element={<>Hello <Outlet /></>} >
          <Route index element={<>Welcome</>} />
          <Route path=':id' element={<>jsdfsdf</>} />
        </Route>

        <Route path='main'>

          <Route element={<>Helllo layout <Outlet /></>}>
            <Route path='web' element={<>web</>} />

          </Route>
        </Route>


      </Routes>
    </BrowserRouter>
  </StrictMode >,
)
