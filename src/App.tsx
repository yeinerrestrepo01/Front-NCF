import {
  AuthenticationProvider,
  ModalAlertProvider,
  ModalProvider,
  ResolveProvider,
} from 'context';
import React from 'react';
import { AppRoute } from 'routers';
import './App.scss';

const App: React.FC = () => {
  return (
    <main>
      <ModalAlertProvider>
        <ResolveProvider>
          <AuthenticationProvider>
            <ModalProvider>
              <AppRoute />
            </ModalProvider>
          </AuthenticationProvider>
        </ResolveProvider>
      </ModalAlertProvider>
    </main>
  );
};

export default App;
