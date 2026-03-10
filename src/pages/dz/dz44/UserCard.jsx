import { memo, useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

const UserCard = memo(function UserCard({ user }) {
  const { theme } = useContext(AppContext);

  return (
    <li className={`context-level context-level--3 user-card--${theme}`}>
      <span className="context-level__label">Level 3 — UserCard</span>
      <span className="context-level__reads">reads: <code className="inline-code">theme</code></span>
      <strong className="user-card__name">{user.name}</strong>
      <span className="user-card__role">{user.role}</span>
      <span className="user-card__email">{user.email}</span>
    </li>
  );
});

export default UserCard;
