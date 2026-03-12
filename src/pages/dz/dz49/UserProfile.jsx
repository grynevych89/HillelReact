import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../../constants';

const randomId = Math.floor(Math.random() * 10) + 1;
const defaultFetch = () => axios.get(`${API_BASE_URL}/users/${randomId}`);

function UserProfile({ fetchFn = defaultFetch }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFn()
      .then((res) => setUser(res.data))
      .catch(() => setError('Failed to load user data'))
      .finally(() => setLoading(false));
  }, [fetchFn]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="user-profile">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </div>
  );
}

export default UserProfile;
