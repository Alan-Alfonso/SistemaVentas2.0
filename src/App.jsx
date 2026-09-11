import { Routes, Route } from 'react-router-dom';
import { Login } from './Components/Login';
import { Menu } from './Components/Menu';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}