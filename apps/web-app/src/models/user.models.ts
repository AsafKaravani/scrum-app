export type UserId = string;

export type User = {
  id: UserId;
  name: string;
  created_at: Date;
  updated_at: Date;
};

export type UserInput = {
  name: string;
};
