import { RouterProvider } from 'react-router';
import { AppProvider } from './context/AppProvider';
import router from './router';
import './App.css';

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
