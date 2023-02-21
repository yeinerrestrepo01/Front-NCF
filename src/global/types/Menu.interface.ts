export type Profiles = {
  nombre: string;
};

export type Menuprofile = {
  menu: number[];
  profile: ProfilesData;
};

export type MenuItems = {
  id: number;
  name: string;
  url?: string;
};

export enum ProfilesData {
  'Anulaciones',
  'Recalculo',
  'Root',
  'Soporte',
}
