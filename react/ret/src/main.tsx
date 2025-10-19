import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Test from './Route/Test'
import ContextText from './ContextManagement/ContextText'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import DataContextProvider from './ContextManagement/NativeContexts/context.jsx'
import { store } from './ContextManagement/RTKquery/store';
import UserComponnet from './ContextManagement/redux/UserComponnet.jsx';
import { Provider } from "react-redux";
import { RecoilRoot } from 'recoil';
import { Recoil } from './ContextManagement/Recoil/Recoil'
import User from './Tail/User'
import { Theme } from "@radix-ui/themes";
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Query from './QueryCalls/QueryApp'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


export const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
    {/* <DataContextProvider> */}
    {/* <Provider store={store}> */}
    <QueryClientProvider client={queryClient}>
      <Theme>

        <RecoilRoot>


          <Routes>

            <Route path='/' element={<User />} />
            <Route path='/user' element={<Query />} />
            <Route path='/recoil' element={<Recoil />} />
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
        </RecoilRoot>

        {/* </Provider> */}
        {/* </DataContextProvider> */}
      </Theme>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>

  </BrowserRouter>
  // </StrictMode >,
)
