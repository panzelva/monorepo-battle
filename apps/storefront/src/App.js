import logo from "./logo.svg";
import "./App.css";
import { add, pow, sub } from "@monorepo-example/utils";
import { HelloWorld } from "@monorepo-example/components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>add is: {add(1, 2)}</p>
        <p>sub is: {sub(3, 1)}</p>
        <p>pow is: {pow(4, 2)}</p>
        <HelloWorld name="world" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
