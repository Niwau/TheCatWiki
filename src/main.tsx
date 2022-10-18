import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyle'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, } from 'react-router-dom'
import { Home } from './pages/Home'
import { Error404 } from './pages/Error404'
import { Cats } from './pages/Cats'
import { getBreeds } from './utils/api'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Home/>} errorElement={<Error404/>}/>
    <Route path='cats' loader={() => getBreeds(20)} element={<Cats/>} errorElement={<Error404/>}/>
  </>
))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </>
)
