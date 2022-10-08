import BackDrop from 'components/BackDrop/BackDrop';
import Homelayout from 'layouts/Homelayout/Homelayout';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRoute: React.FC = () => {
  return (
    <Suspense fallback={<BackDrop show />}>
      <Routes>
        <Route element={<Homelayout />} path="/*" />
      </Routes>
    </Suspense>
  );
};

export default AppRoute;
