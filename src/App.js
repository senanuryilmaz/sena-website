import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         WELCOME TO MY WEBSITE
        </p>
        <a
          className="App-link"
          href="mailto:senasny1@gmail.com?subject=Feedback&body=Message"
          target="_blank"
          rel="noopener noreferrer"

        >
         EMAIL ME
        </a>
      </header>
    </div>
  );
}

export default App;
