export type User = {
  oid: string;
  email: string;
  username: string;
  created_at: string;
  is_subscribed: boolean;
};

export type Login = {
  email: string;
};
export type Confirm = {
  email: string;
  otp: string;
};

export type Create = {
  email: string;
  username: string;
  telegram: string;
};
