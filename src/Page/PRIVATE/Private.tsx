import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../../Interfaces';
import { Wallance, History } from './Loby';
import { RoutesWithNotFound } from '../../Utils';

export default function Private() {
  return (
    <>
      <RoutesWithNotFound>
        <Route path='/' element={<Navigate to={PrivateRoutes.WALLANCE} />} />
        <Route path={PrivateRoutes.WALLANCE} element={<Wallance />} />
        <Route path={PrivateRoutes.HISTORY} element={<History />} />
      </RoutesWithNotFound>
    </>
  );
}
