import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../constants';

const API_URL = `${API_BASE_URL}/posts?_limit=5`;

function PostsFeed() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchPosts = async () => {
      setStatus('loading');
      setError(null);

      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        const data = await response.json();
        if (!cancelled) {
          setPosts(data);
          setStatus('success');
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setStatus('error');
        }
      }
    };

    fetchPosts();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleRetry = () => {
    setPosts([]);
    setStatus('idle');
    setError(null);
    setStatus('loading');
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setStatus('success');
      })
      .catch((err) => {
        setError(err.message);
        setStatus('error');
      });
  };

  return (
    <div className="form-card">
      <h2>Posts Feed</h2>
      <p className="form-description">
        Data fetched from <code>jsonplaceholder.typicode.com</code> using <code>useEffect</code>.
      </p>

      {status === 'loading' && <p className="status loading">Loading posts...</p>}

      {status === 'error' && (
        <div className="status error">
          <p>Error: {error}</p>
          <button onClick={handleRetry}>Retry</button>
        </div>
      )}

      {status === 'success' && (
        <ul className="posts-list">
          {posts.map((post) => (
            <li key={post.id} className="post-item">
              <h4>
                #{post.id} {post.title}
              </h4>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostsFeed;
