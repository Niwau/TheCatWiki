import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyle'
import { Home } from './pages/Home'
import { Error404 } from './pages/Error404'
import { Cats } from './pages/Cats'
import { getBreeds } from './utils/api'

import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements, 
  Route 
} from 'react-router-dom'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route 
      path='/' 
      loader={() => getBreeds(8, 0)} 
      element={<Home/>} 
      errorElement={<Error404/>} 
    />
    <Route 
      path='/cats/:page' 
      element={<Cats/>} 
      loader={({ params }) => getBreeds(10, parseInt(params.page as string))}
      errorElement={<Error404/>}
    />
  </>
))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </>
)
