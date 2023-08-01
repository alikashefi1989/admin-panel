// module
import { FC } from 'react'
import { Routes, Route } from 'react-router-dom';
// custom
import './assets/style/index.scss'
import './i18n/config';
import routes from './configs/client/routes';
import RouteModel from './models/other/route';
import useAuthenticateController from './hooks/useAuthenticateController';
import useIsAuthenticated from './hooks/useIsAuthenticated';

const App: FC<{}> = () => {
  const isAuthenticated: boolean = useIsAuthenticated()
  useAuthenticateController()

  return <Routes>
    {
      (isAuthenticated ? routes : routes.filter((route: RouteModel) => (route.isPublic)))
        .map(({ path, Layout, Cmp }: RouteModel) => (
          <Route
            key={path}
            path={path}
            element={Layout ? <Layout Cmp={Cmp} /> : <Cmp />}
          />
        ))
    }
  </Routes>
}

export default App
