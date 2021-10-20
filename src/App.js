import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <Dictionary />
        <p>
          <a href="https://github.com/kaylashovlowsky/react-dictionary-app">
            Open-source code
          </a>{" "}
          by Kayla Shovlowsky
        </p>
      </div>
    </div>
  );
}

export default App;
