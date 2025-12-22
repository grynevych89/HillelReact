import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import StatefulComponent from './components/StatefulComponent';
import StatelessComponent from './components/StatelessComponent';
import ClassComponent from './components/ClassComponent';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    alert(`You entered: ${inputValue}`);
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className="app">
      <h1>React Homeworks</h1>

      {/* Original components */}
      <div className="section">
        <h2>Basic Input & Button</h2>
        <div className="input-group">
          <Input
            placeholder="Enter text"
            type="text"
            onChange={handleInputChange}
            value={inputValue}
          />
          <Button
            text="Clear"
            type="button"
            onClick={handleClear}
            className="btn-clear"
          />
        </div>
        <Button
          text="Submit"
          type="button"
          onClick={handleButtonClick}
        />
      </div>

      {/* Stateful Component */}
      <div className="section">
        <StatefulComponent />
      </div>

      {/* Stateless Component */}
      <div className="section">
        <StatelessComponent
          title="Project Dashboard"
          description="This is a stateless component that only receives and displays props. It has no internal state."
          items={['Complete homework', 'Study React hooks', 'Build project', 'Deploy to Vercel']}
          status="active"
        />
      </div>

      {/* Class Component (optional) */}
      <div className="section">
        <ClassComponent />
      </div>
    </div>
  );
}

export default App;