import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ConverterPage, PersonalPage } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route index path="/" element={<PersonalPage />} />
          index - main page -> doesnt work
        */}
        <Route path="/" element={<PersonalPage />} />

        <Route path="/converter" element={<ConverterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
