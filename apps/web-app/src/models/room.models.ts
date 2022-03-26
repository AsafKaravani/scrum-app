export type RoomId = string;

export type Room = {
  id: RoomId;
  name: string;
  number: string;
  state: any;
  status: string;
  updated_at: Date;
  created_at: Date;
};

export type RoomInput = {
  name: string;
  number: string;
};
