import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '../Loader/Loader';
import { UserMenu } from 'components/Application/UserMenu/UserMenu';
import Container from '../Container/Container';

export const Layout = () => {
  return (
    <Container>
      <div style={{ padding: '0 25px' }}>
        <UserMenu />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};
