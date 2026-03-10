import { memo, useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import UserCard from './UserCard';

const UserList = memo(function UserList() {
  const { users, theme } = useContext(AppContext);

  return (
    <div className={`context-level context-level--2 user-list--${theme}`}>
      <span className="context-level__label">Level 2 — UserList</span>
      <span className="context-level__reads">reads: <code className="inline-code">users</code>, <code className="inline-code">theme</code></span>
      <h3 className="user-list__title">Team Members</h3>
      <ul className="user-list__items">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
});

export default UserList;
