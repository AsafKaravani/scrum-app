import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';
import { useWindowSize } from '../../hooks/utils/use-window-size';

export function Layout() {
  const { height } = useWindowSize();
  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', left: 0, zIndex: 9999 }}>
        <Header />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: height }}>
        {/** This header is used as padding to make sure
         * the acctual header is not shadowing anything */}
        <div style={{ opacity: 0 }}>
          <Header />
        </div>
        <div style={{ flex: '1', overflowY: 'scroll' }}>
          <Outlet />
        </div>
        {/** This footer is used as padding to make sure
         * the acctual footer is not shadowing anything */}
        <div style={{ opacity: 0 }}>
          <Footer />
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, width: '100%', left: 0, zIndex: 9999 }}>
        <Footer />
      </div>
    </>
  );
}
