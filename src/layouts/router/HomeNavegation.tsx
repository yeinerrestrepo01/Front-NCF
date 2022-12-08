import { BackDrop } from 'components';
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home/Home'));
const PartialCancellation = lazy(() => import('pages/PartialCancellation/PartialCancellation'));
const SAP = lazy(() => import('pages/SapPage/SapPage'));

const HomeNavegation: React.FC = () => {
  return (
    <Suspense fallback={<BackDrop show />}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<PartialCancellation />} path="partial" />
        <Route element={<SAP />} path="sap" />
        <Route path="*" element={<Navigate to={'/404'} replace />} />
      </Routes>
    </Suspense>
  );
};

export default HomeNavegation;
