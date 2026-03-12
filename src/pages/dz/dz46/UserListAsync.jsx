import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAsyncUsers,
  selectAsyncStatus,
  selectAsyncError,
  fetchUsers,
} from '../../../redux/slices/usersAsyncSlice';
import { selectTheme } from '../../../redux/slices/themeSlice';
import UserCardAsync from './UserCardAsync';

const UserListAsync = memo(function UserListAsync() {
  const users = useSelector(selectAsyncUsers);
  const status = useSelector(selectAsyncStatus);
  const error = useSelector(selectAsyncError);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <div className={`context-level context-level--2 user-list--${theme}`}>
      <span className="context-level__label">Level 2 — UserListAsync</span>
      <span className="context-level__reads">
        reads: <code className="inline-code">users</code>,{' '}
        <code className="inline-code">status</code>,{' '}
        <code className="inline-code">error</code>,{' '}
        <code className="inline-code">theme</code> via <code className="inline-code">useSelector</code>
      </span>
      <h3 className="user-list__title">Team Members</h3>

      {status === 'loading' && (
        <p className="status loading">Loading users...</p>
      )}

      {status === 'failed' && (
        <p className="status error">
          {error}
          <button onClick={() => dispatch(fetchUsers())}>Retry</button>
        </p>
      )}

      {status === 'succeeded' && (
        <ul className="user-list__items">
          {users.map((user) => (
            <UserCardAsync key={user.id} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
});

export default UserListAsync;
