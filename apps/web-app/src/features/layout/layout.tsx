import { Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import useDetectKeyboardOpen from 'use-detect-keyboard-open';
import { useEffect } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { useWindowSize } from '../../hooks/utils/use-window-size';
import { layoutStateAtom } from './layout-state.atom';

export function Layout() {
  const { height } = useWindowSize();
  const [layoutState, setLayoutState] = useRecoilState(layoutStateAtom);
  const isKeyboardOpen = useDetectKeyboardOpen();

  useEffect(() => {
    setLayoutState({ ...layoutState, footerVisable: !isKeyboardOpen });
  }, [isKeyboardOpen]);

  return (
    <div style={{ background: '#FDF6EC' }}>
      <div style={{ position: 'fixed', top: 0, width: '100%', left: 0, zIndex: 9999 }}>
        <Header />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: height }}>
        {/** This header is used as padding to make sure
         * the acctual header is not shadowing anything */}
        <div style={{ opacity: 0 }}>
          <Header />
        </div>
        <div style={{ flex: '1', overflowY: 'scroll', background: '#FDF6EC', display: 'flex' }}>
          <Outlet />
        </div>
        {/** This footer is used as padding to make sure
         * the acctual footer is not shadowing anything */}
        <div style={{ opacity: 0 }}>{layoutState.footerVisable && <Footer />}</div>
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          left: 0,
          zIndex: 9999,
          transition: 'max-height 0.2s',
          maxHeight: layoutState.footerVisable ? '150px' : '0px',
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
