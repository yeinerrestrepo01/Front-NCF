import { BackDrop } from 'components';
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home/Home'));
const DGIICorrection = lazy(() => import('pages/DGIICorrection/DGIICorrection'));
const PartialCancellation = lazy(() => import('pages/PartialCancellation/PartialCancellation'));
const SAP = lazy(() => import('pages/SapPage/SapPage'));
const NFCSettings = lazy(() => import('pages/Maintenance/NFCSettings/NFCSettings'));
const CancellationDocument = lazy(
  () => import('pages/Maintenance/CancellationDocument/CancellationDocument')
);
const DocumentCorrection = lazy(
  () => import('pages/Maintenance/DocumentCorrection/DocumentCorrection')
);

const HomeNavegation: React.FC = () => {
  return (
    <Suspense fallback={<BackDrop show />}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<DGIICorrection />} path="dgii" />
        <Route element={<PartialCancellation />} path="partial" />
        <Route element={<SAP />} path="sap" />
        <Route element={<NFCSettings />} path="settings" />
        <Route element={<CancellationDocument />} path="cancellation" />
        <Route element={<DocumentCorrection />} path="correction" />
        <Route path="*" element={<Navigate to={'/404'} replace />} />
      </Routes>
    </Suspense>
  );
};

export default HomeNavegation;
