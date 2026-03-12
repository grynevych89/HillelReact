import { MOCK_USER } from '../constants';

export const DZ49_SCENARIOS = [
  {
    id: 1,
    name: 'Shows loading indicator while fetching',
    fetchFn: () => new Promise(() => {}),
    expectedText: 'Loading...',
    checkDelay: 50,
  },
  {
    id: 2,
    name: 'Displays user data after successful fetch',
    fetchFn: () => Promise.resolve({ data: MOCK_USER }),
    expectedText: MOCK_USER.name,
    checkDelay: 200,
  },
  {
    id: 3,
    name: 'Displays error message when fetch fails',
    fetchFn: () => Promise.reject(new Error('Network Error')),
    expectedText: 'Failed to load user data',
    checkDelay: 200,
  },
];
