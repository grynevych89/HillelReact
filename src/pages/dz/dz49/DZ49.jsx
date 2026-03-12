import UserProfile from './UserProfile';
import TestRunner from '../../../tests/components/TestRunner';

function DZ49() {
  return (
    <div>
      <p className="dz-description">
        Vitest + React Testing Library demo. <code className="inline-code">UserProfile</code>{' '}
        fetches a random user (id 1–10) from <code className="inline-code">jsonplaceholder.typicode.com</code>{' '}
        using <code className="inline-code">API_BASE_URL</code> from <code className="inline-code">constants.js</code>{' '}
        and handles three states: loading, success, and error.
        Instead of <code className="inline-code">vi.mock(axios)</code>, tests use dependency injection —
        each test passes a custom <code className="inline-code">fetchFn</code> directly as a prop,
        keeping tests isolated from the network.
        <code className="inline-code">MOCK_USER</code> and <code className="inline-code">DZ49_SCENARIOS</code>{' '}
        are defined once and shared between Vitest unit tests (<code className="inline-code">src/tests/unit/</code>)
        and the visual <code className="inline-code">TestRunner</code> on the right (<code className="inline-code">src/tests/components/</code>).
        Unit tests verify component logic in isolation.
      </p>
      <div className="dz49__layout">
        <UserProfile />
        <TestRunner />
      </div>
    </div>
  );
}

export default DZ49;
