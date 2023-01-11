import axios from 'axios';
import { IResponseGeneric } from 'global/types/IResponseGeneric';
import { UserData } from 'global/types/Resolve.interface';
import { UseMutationResult, useMutation } from 'react-query';

interface LoginFetchprops {
  usuario: string;
  password: string;
}

const login = async (params: LoginFetchprops) => {
  const data = await axios.post<IResponseGeneric<UserData>>('Autenticacion', params);

  return data?.data;
};

export default function useLogin(): UseMutationResult<
  IResponseGeneric<UserData>,
  Error,
  LoginFetchprops,
  Error
> {
  return useMutation(login);
}
