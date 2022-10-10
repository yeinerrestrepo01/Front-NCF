import { BackDrop } from 'components';
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home/Home'));

const HomeNavegation: React.FC = () => {
  return (
    <Suspense fallback={<BackDrop show />}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route path="*" element={<Navigate to={'404'} replace />} />
      </Routes>
    </Suspense>
  );
};

export default HomeNavegation;
