import logo from "./logo.svg";
import "./App.scss";
import MyTest from "./test/myTest";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Chào Thanh</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyTest />
      </header>
    </div>
  );
};

export default App;
