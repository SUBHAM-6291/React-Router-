import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import '../src/index.css';

import Layout from '../src/Root/Root';
import Home from '../src/Components/Home/Home';
import About from '../src/Components/About/About';
import Contact from '../src/Components/Contact/Contact';
import User from '../src/Components/User/User';
import Github, { githubInfoLoader } from '../src/Components/Github/Github';
import ErrorPage from "../src/ErrorPage/ErrorPage";

 // Import Error Page

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>  {/* Wrap Layout with error handler */}
      <Route path='/HOME' element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route path="github" element={<Github />} loader={githubInfoLoader} />
      <Route path="*" element={<ErrorPage />} /> {/* Catch-all 404 route */}
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
