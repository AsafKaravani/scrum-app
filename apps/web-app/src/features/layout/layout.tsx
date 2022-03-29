import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';
import { useWindowSize } from '../../hooks/utils/use-window-size';

export function Layout() {
  const { height } = useWindowSize();
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: height, background: 'red' }}>
        <div>
          <Header />
        </div>
        <div style={{ flex: '1', overflowY: 'scroll' }}>
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
