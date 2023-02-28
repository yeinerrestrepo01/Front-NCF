import { FormControOptionslSelect } from 'global/types';
import * as Yup from 'yup';
import {
  CheckProfilesFormItems,
  ProfileData,
  UserDataList,
} from 'pages/Maintenance/CheckProfiles/constants/CheckProfiles.interface';

export const CheckProfilesInitialVaues: CheckProfilesFormItems = {
  user: '',
  profile: '',
};

export const SelectTranformData = (
  data: UserDataList[] | ProfileData[]
): FormControOptionslSelect[] => {
  return data.map((item) => {
    return {
      id: item.id,
      name: (item as UserDataList).nombreUsuario || (item as ProfileData).nombre,
    };
  });
};

export const ValidationCheckProfiles = Yup.object({
  user: Yup.string().required('Campo Obligatorio'),
  profile: Yup.string().required('Campo Obligatorio'),
});
