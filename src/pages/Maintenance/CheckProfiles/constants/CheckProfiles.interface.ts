export type CheckProfilesFormItems = {
  user: string;
  profile: string;
};

export type UserDataList = {
  id: number;
  usuario: string;
  nombreUsuario: string;
  correo: string;
  estado: number;
  fechaCreacion: Date;
};

export interface ProfileData {
  id: number;
  nombre: string;
  activo: boolean;
}

export type ListAssignProfiles = {
  nombreusuario: string;
  perfil: string;
};
