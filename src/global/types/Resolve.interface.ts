import { Profiles } from 'global/types';

export type Global = {
  APIUrl: string;
};

export type Authentication = {
  login: (params: UserData) => void;
  logout: () => void;
  user: UserData;
};

export type UserData = {
  employeeId: string;
  samAccountName: string;
  emailAddress: string;
  name: string;
  displayName: string;
  perfiles: Profiles[];
};
