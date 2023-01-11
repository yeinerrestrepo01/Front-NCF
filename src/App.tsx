import { AuthenticationProvider, ResolveProvider } from 'context';
import React from 'react';
import { AppRoute } from 'routers';
import './App.scss';

const App: React.FC = () => {
  return (
    <main>
      <ResolveProvider>
        <AuthenticationProvider>
          <AppRoute />
        </AuthenticationProvider>
      </ResolveProvider>
    </main>
  );
};

export default App;
