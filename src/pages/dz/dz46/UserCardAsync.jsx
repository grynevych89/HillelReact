import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/slices/themeSlice';

const UserCardAsync = memo(function UserCardAsync({ user }) {
  const theme = useSelector(selectTheme);

  return (
    <li className={`context-level context-level--3 user-card--${theme}`}>
      <span className="context-level__label">Level 3 — UserCardAsync</span>
      <span className="context-level__reads">
        reads: <code className="inline-code">theme</code> via <code className="inline-code">useSelector</code>
      </span>
      <strong className="user-card__name">{user.name}</strong>
      <span className="user-card__role">{user.company.name}</span>
      <span className="user-card__email">{user.email}</span>
    </li>
  );
});

export default UserCardAsync;
