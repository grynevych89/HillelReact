import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { AppProvider } from './context/AppProvider';
import store from './redux/store';
import router from './router';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </Provider>
  );
}

export default App;
