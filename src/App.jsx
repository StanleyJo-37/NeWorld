import './App.css';
import Navbar from './components/navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { navItems } from './constants/nav-items';
import CountryProvider from './providers/CountryProvider';

export default function App() {
  const theme = localStorage.getItem('theme')
                ? localStorage.getItem('theme')
                : matchMedia('(prefers-color-scheme: dark)').matches
                  ? "dark"
                  : "light";

  if (theme === "dark") document.documentElement.setAttribute('data-theme', 'dark');

  return (
    <div data-theme={theme}>
      <CountryProvider>
        <ScrollRestoration />
        <Navbar navItems={navItems} _theme={theme} />
        <Outlet />
        <ToastContainer />
      </CountryProvider>
    </div>
  );
}