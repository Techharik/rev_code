import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Test from './Route/Test'
import ContextText from './ContextManagement/ContextText'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import DataContextProvider from './ContextManagement/NativeContexts/context.jsx'
import { store } from './ContextManagement/redux/store';
import UserComponnet from './ContextManagement/redux/UserComponnet.jsx';
import { Provider } from "react-redux";

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
    <DataContextProvider>
      <Provider store={store}>


        <Routes>

          <Route path='/' element={<App />} />
          <Route path='/test' element={<Test />} />
          <Route path='/redux-state' element={<UserComponnet />} />

          <Route path='/context' element={<ContextText />} />


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

      </Provider>
    </DataContextProvider>
  </BrowserRouter>
  // </StrictMode >,
)
