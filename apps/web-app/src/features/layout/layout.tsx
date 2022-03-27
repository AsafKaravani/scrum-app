import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';

export function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div>
        <Header />
      </div>
      <div style={{ flex: '1' }}>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
