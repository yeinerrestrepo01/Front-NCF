import BackDrop from 'components/BackDrop/BackDrop';
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from 'routers';

const Authentication = lazy(() => import('layouts/AuthenticationLayout/AuthenticationLayout'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const Homelayout = lazy(() => import('layouts/Homelayout/Homelayout'));
const Page404 = lazy(() => import('pages/Page404/Page404'));

const AppRoute: React.FC = () => {
  return (
    <Suspense fallback={<BackDrop show />}>
      <Routes>
        <Route
          element={
            <PublicRoute>
              <Suspense fallback={<BackDrop show />}>
                <Authentication />
              </Suspense>
            </PublicRoute>
          }
          path="/*"
        />
        <Route
          element={
            <PrivateRoute>
              <Suspense fallback={<BackDrop show />}>
                <Homelayout />
              </Suspense>
            </PrivateRoute>
          }
          path="/home/*"
        />
        <Route path="error" element={<ErrorPage />} />
        <Route element={<Page404 />} path="/404" />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoute;
