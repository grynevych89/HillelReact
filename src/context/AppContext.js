import { createContext } from 'react';

const defaultUsers = [
  { id: 1, name: 'Alice Johnson', role: 'Frontend Developer', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', role: 'Backend Developer', email: 'bob@example.com' },
  { id: 3, name: 'Carol White', role: 'UI/UX Designer', email: 'carol@example.com' },
  { id: 4, name: 'David Brown', role: 'DevOps Engineer', email: 'david@example.com' },
];

export const AppContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  users: defaultUsers,
});

export { defaultUsers };
