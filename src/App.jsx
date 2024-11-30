import './App.css';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

export default function App() {
  const { mode, setMode } = useContext(ThemeContext);
  const defaultMode = window.matchMedia('(prefers-color-theme: dark)').matches ? 'dark' : 'light';

  useEffect(() => {
    setMode(defaultMode);
  }, []);

  return (
    <div>

    </div>
  );
}