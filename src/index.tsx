import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Projects } from './pages/projects'
import { About } from './pages/about'
import { Skills } from './pages/skills';

const router = createBrowserRouter([
  {

    path: '/',
    element: <App />
  },

  {
    path: '/projects',
    element: <Projects />

  },
  {
    path: '/linkedIn'
  },

  {
    path: '/about',
    element: <About />
  },
  {
    path: '/skills',
    element: <Skills />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
