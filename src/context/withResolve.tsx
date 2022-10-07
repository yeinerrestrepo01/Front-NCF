import React, { createContext, useEffect, useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Global } from 'global/types/Resolve.interface';

const baseUrl = process.env.REACT_APP_API_URL;

export const ResolveContext = createContext<Global>({
  APIUrl: null,
});

interface ResolveProviderProps {
  children: React.ReactNode;
}

export const ResolveProvider: React.FC<ResolveProviderProps> = ({ children }) => {
  useEffect(() => {
    axios.defaults.baseURL = baseUrl;
  }, []);

  const global = useMemo(
    () => ({
      APIUrl: baseUrl,
    }),
    []
  );
  return <ResolveContext.Provider value={global}>{children}</ResolveContext.Provider>;
};

ResolveProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
