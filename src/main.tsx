/* eslint-disable import/order */
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { FilterSection } from './components/organism/filter-section.tsx';
import { UserTable } from './components/organism/user-table.tsx';
import { MainFrame } from './components/templates/main-frame.tsx';
import { mainLoader } from './data/main-loader.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <FilterSection />
        <UserTable />
      </>
    ),

    loader: mainLoader,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainFrame>
      <RouterProvider router={router} />
    </MainFrame>
  </React.StrictMode>,
);
