import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import App from './App.jsx'


function Main() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Main />);
