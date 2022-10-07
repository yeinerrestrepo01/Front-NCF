import { ResolveProvider } from 'context';
import React from 'react';
import AppRoute from 'routers/AppRoute';
import './App.scss';

const App: React.FC = () => {
  return (
    <main>
      <ResolveProvider>
        <AppRoute />
      </ResolveProvider>
    </main>
  );
};

export default App;
