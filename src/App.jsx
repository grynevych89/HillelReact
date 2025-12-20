import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    alert(`Ви ввели: ${inputValue}`);
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className="app">
      <h1>React Homework 38.1</h1>
      <div className="input-group">
        <Input
          placeholder="Введіть текст"
          type="text"
          onChange={handleInputChange}
          value={inputValue}
        />
        <Button
          text="Очистити"
          type="button"
          onClick={handleClear}
          className="btn-clear"
        />
      </div>
      <Button
        text="Натисни мене"
        type="button"
        onClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
