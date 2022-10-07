import React, { createContext, useEffect, useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Global } from 'global/types/Resolve.interface';

const baseUrl = 'http://localhost:5067/api';
console.log(baseUrl)
export const ResolveContext = createContext<Global>({
    APIUrl: null,
});

interface ResolveProviderProps {
    children: React.ReactNode;
}

export const ResolveProvider: React.FC<ResolveProviderProps> = ({ children }) => {
    useEffect(() => {
        axios.defaults.baseURL = baseUrl || 'http://localhost:5067/api';
    }, []);

    const global = useMemo(
        () => ({
            APIUrl: baseUrl || 'http://localhost:5067/api',
        }),
        []
    );
    return <ResolveContext.Provider value={global}>{children}</ResolveContext.Provider>;
};

ResolveProvider.propTypes = {
    children: PropTypes.any.isRequired,
};