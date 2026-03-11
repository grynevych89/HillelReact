import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../../redux/slices/usersSlice';
import { selectTheme } from '../../../redux/slices/themeSlice';
import UserCardRedux from './UserCardRedux';

const UserList = memo(function UserList() {
  const users = useSelector(selectUsers);
  const theme = useSelector(selectTheme);

  return (
    <div className={`context-level context-level--2 user-list--${theme}`}>
      <span className="context-level__label">Level 2 — UserList</span>
      <span className="context-level__reads">
        reads: <code className="inline-code">users</code>, <code className="inline-code">theme</code> via <code className="inline-code">useSelector</code>
      </span>
      <h3 className="user-list__title">Team Members</h3>
      <ul className="user-list__items">
        {users.map((user) => (
          <UserCardRedux key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
});

export default UserList;
