import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <header className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white text-2xl">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-blue-300"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Taiwlind with React TypeScript
        </a>
      </header>
      <div className="bg-white rounded-lg p-3">
        <div>
          <h2>Erin Lindford</h2>
          <div>Product Engineer</div>
          <div>erinlindford@example.com</div>
          <div>(555) 765-4321</div>
        </div>
      </div>
    </div>
  );
}

export default App;
