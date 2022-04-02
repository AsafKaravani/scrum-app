import { atom } from 'recoil';

export const layoutStateAtom = atom({
  key: 'textState',
  default: {
    headerVisable: true,
    footerVisable: true,
  },
});
