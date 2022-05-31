import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Wrapper } from './components/Wrapper';
import { ConverterPage, PersonalPage } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<PersonalPage />} />

          <Route path="converter" element={<ConverterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
