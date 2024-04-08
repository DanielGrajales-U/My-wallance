import { BrowserRouter, Route } from 'react-router-dom'
import { RoutesWithNotFound } from './Utils'
import { PublicRoutes, PrivateRoutes } from './Interfaces'
import AuthGuard from './Guards/AuthGuard'
import { Login, Signup } from './Page/PUBLIC/Sesion' 
import { Private } from './Page/PRIVATE'

function App() {
  return (
    <BrowserRouter>
    <RoutesWithNotFound>
      <Route path={PublicRoutes.LOGIN} element={<Login />} />
      <Route path={PublicRoutes.SIGNUP} element={<Signup />} />
      <Route element={<AuthGuard />}>
        <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
      </Route>
    </RoutesWithNotFound>
  </BrowserRouter>
  )
}

export default App
