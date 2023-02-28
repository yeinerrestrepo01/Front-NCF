import { CheckProfilesFormItems } from 'pages/Maintenance/CheckProfiles/constants/CheckProfiles.interface';
import axios from 'axios';
import { IResponseGeneric } from 'global/types';
import { UseMutationResult, useMutation } from 'react-query';

const postAssignProfile = async (params: CheckProfilesFormItems) => {
  const data = await axios.post<IResponseGeneric<boolean>>('/Perfiles/AsignarPerfilUsuario', {
    idUsuario: Number(params.user),
    idPerfil: Number(params.profile),
  });

  return data?.data;
};

export default function useAssignProfile(): UseMutationResult<
  IResponseGeneric<boolean>,
  Error,
  CheckProfilesFormItems,
  Error
> {
  return useMutation(postAssignProfile);
}
