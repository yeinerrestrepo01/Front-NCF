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
const Reports = lazy(() => import('pages/ReportsPage/ReportsPage'));
const NoAccess = lazy(() => import('pages/NoAccessPage/NoAccessPage'));
const CheckProfiles = lazy(() => import('pages/Maintenance/CheckProfiles/CheckProfiles'));

const HomeNavegation: React.FC = () => {
  return (
    <Suspense fallback={<BackDrop show />}>
      <Routes>
        <Route element={<Home />} index />
        <Route element={<DGIICorrection />} path="dgii" />
        <Route element={<PartialCancellation />} path="partial" />
        <Route element={<SAP />} path="sap" />
        <Route element={<NFCSettings />} path="settings" />
        <Route element={<CancellationDocument />} path="cancellation" />
        <Route element={<DocumentCorrection />} path="correction" />
        <Route element={<Reports />} path="reports" />
        <Route element={<NoAccess />} path="noaccess" />
        <Route element={<CheckProfiles />} path="profile" />
        <Route path="*" element={<Navigate to={'/404'} replace />} />
      </Routes>
    </Suspense>
  );
};

export default HomeNavegation;
