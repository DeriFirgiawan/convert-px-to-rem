import { useState } from 'react';
import './App.css';

export default function App() {
  const [result, setResult] = useState(1);
  const changeInput = (event) => {
    setResult(event.target.value / 16);
  }
  return (
    <main className="container">
      <div className="form-input">
        <div className="wrapper">
          <input type="number" placeholder="16" onChange={changeInput} autoFocus={true} />
          <div className="text-px">
            <h1>px</h1>
          </div>
        </div>
        <span>=</span>
        <div className="input-rem">
          <h1>{result} rem</h1>
        </div>
      </div>
    </main>
  );
}
