import { atom } from 'recoil';

type AttendanceState = {
  username?: string;
  name?: string;
  holding? : 1 | 3 | 8;
};

export const roomStateAtom = atom<AttendanceState>({
  key: 'attendance',
  default: {},
});


type RoomAttendancesState = AttendanceState[];

export const roomAttendancesStateAtom = atom<RoomAttendancesState>({
  key: 'attendance',
  default: [],
});
