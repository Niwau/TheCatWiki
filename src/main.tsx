import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyle'
import { Home } from './pages/Home'
import { Error404 } from './pages/Error404'
import { Cats } from './pages/Cats'

import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements, 
  Route 
} from 'react-router-dom'
import { APIContextProvider } from './context/APIContext'
import { Cat } from './pages/Cat'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Home/>}/>
    <Route path='/cats/:page' element={<Cats/>}/>
    <Route path='/cat/:id' element={<Cat/>}/>
    <Route path={'*'} element={<Error404/>}/>
  </>
))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyle/>
    <APIContextProvider>
    <RouterProvider router={router}/>
    </APIContextProvider>
  </>
)
