import { AuthenticationProvider, ModalProvider, ResolveProvider } from 'context';
import React from 'react';
import { AppRoute } from 'routers';
import './App.scss';

const App: React.FC = () => {
  return (
    <main>
      <ResolveProvider>
        <AuthenticationProvider>
          <ModalProvider>
            <AppRoute />
          </ModalProvider>
        </AuthenticationProvider>
      </ResolveProvider>
    </main>
  );
};

export default App;
