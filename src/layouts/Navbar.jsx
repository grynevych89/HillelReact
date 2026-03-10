import { NavLink } from 'react-router';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/homeworks', label: 'Homeworks' },
];

function Navbar() {
  return (
    <nav className="router-nav">
      {navLinks.map(({ to, label, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            'router-link' + (isActive ? ' router-link--active' : '')
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
