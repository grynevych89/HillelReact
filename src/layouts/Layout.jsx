import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="app">
      <h1>React Homeworks</h1>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
