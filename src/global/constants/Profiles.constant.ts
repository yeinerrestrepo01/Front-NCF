import { MenuItems, Menuprofile, ProfilesData } from 'global/types';

export const MenuData: MenuItems[] = [
  {
    id: 1,
    name: 'Corrección montos',
    url: '/home',
  },
  {
    id: 2,
    name: ' Corrección DGII',
    url: 'dgii',
  },
  {
    id: 3,
    name: 'Corrección Cantidades',
    url: 'partial',
  },
  {
    id: 4,
    name: 'Envio SAP',
    url: 'sap',
  },
  {
    id: 5,
    name: 'Mantenimiento',
  },
  {
    id: 6,
    name: 'Configuración Tipo NCF',
    url: 'settings',
  },
  {
    id: 7,
    name: 'Anulación Documento',
    url: 'cancellation',
  },
  {
    id: 8,
    name: 'Correción Documento',
    url: 'correction',
  },
  {
    id: 9,
    name: 'Reportes',
    url: 'reports',
  },
  {
    id: 10,
    name: 'Asignación Perfiles',
    url: 'profile',
  },
];

export const ProfilesMenu: Menuprofile[] = [
  {
    menu: [3],
    profile: ProfilesData.Anulaciones,
  },
  {
    menu: [1, 9],
    profile: ProfilesData.Recalculo,
  },
  {
    menu: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    profile: ProfilesData.Root,
  },
  {
    menu: [2, 4],
    profile: ProfilesData.Soporte,
  },
];
