import { BackDrop } from 'components';
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('pages/Authentication/Login/Login'));

const AuthenticationNavigation: React.FC = () => {
  return (
    <Suspense fallback={<BackDrop show />}>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route path="*" element={<Navigate to={'404'} replace />} />
      </Routes>
    </Suspense>
  );
};

export default AuthenticationNavigation;
