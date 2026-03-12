import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants';

function DataFetcher({ id }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data: user } = await axios.get(
          `${API_BASE_URL}/users/${id}`
        );
        if (!cancelled) setData(user);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (!data && loading) return <p className="status loading">Loading data...</p>;
  if (error) return <p className="status error">Error: {error}</p>;

  const { name, email, phone, website, address, company } = data;

  return (
    <div className="form-card" style={{ opacity: loading ? 0.4 : 1, transition: 'opacity 0.3s' }}>
      <h3>{name}</h3>
      <ul className="data-list">
        <li><span>Email:</span> {email}</li>
        <li><span>Phone:</span> {phone}</li>
        <li><span>Website:</span> {website}</li>
        <li><span>City:</span> {address.city}</li>
        <li><span>Company:</span> {company.name}</li>
      </ul>
    </div>
  );
}

export default DataFetcher;
