import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { UserTable } from './components/organism/user-table.tsx';
import { mainLoader } from './data/main-loader.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: mainLoader,
    children: [
      {
        element: <UserTable />,
        path: ':page',
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
