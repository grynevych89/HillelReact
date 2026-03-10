import { useState } from 'react';
import { AppContext, defaultUsers } from './AppContext';

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <AppContext.Provider value={{ theme, toggleTheme, users: defaultUsers }}>
      {children}
    </AppContext.Provider>
  );
}
