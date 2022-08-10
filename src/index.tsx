import 'normalize.css';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Wrapper } from './components/Wrapper';
import { ConverterPage, PersonalPage } from './pages';
import store from './redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<PersonalPage />} />

            <Route path="converter" element={<ConverterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
);
