import { AuthenticationContext } from 'context/withAuthentication';
import { Authentication } from 'global/types/Resolve.interface';
import { useContext } from 'react';

const useAuthentication = (): Authentication => useContext(AuthenticationContext);

export default useAuthentication;
