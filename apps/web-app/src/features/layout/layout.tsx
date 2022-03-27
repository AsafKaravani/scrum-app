import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';

export function Layout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
