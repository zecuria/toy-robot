import React, { useState, useReducer } from 'react';
import './App.css';
import reducer from './reducer';
import parseCommand from './engine/commandParser';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {});
  const [value, setValue] = useState('');

  const { currentlyReporting } = state;
  const reporting = currentlyReporting ? `${currentlyReporting.x}, ${currentlyReporting.y}, ${currentlyReporting.f}` : ''

  return (
    <div className="App">
      <form onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();

          const command = parseCommand(value.toUpperCase());
          if (!command || !command.type) {
            return;
          }

          console.log(command);
          dispatch({ type: command.type, payload: command.position })
        }}>

        <label htmlFor="move">Input</label>
        <input id="move" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Send Command</button>
      </form>

      <div>Currently reporting: {reporting}</div>
    </div>
  );
}

export default App;
