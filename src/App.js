import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <Dictionary />
        <br />
        <hr />
        <footer>
          <p>
            <a
              href="https://github.com/kaylashovlowsky/react-dictionary-app"
              className="source-code"
            >
              Open-source code
            </a>{" "}
            by Kayla Shovlowsky 👩‍💻
          </p>
          <p>
            Hosted on{" "}
            <a
              href="https://app.netlify.com/sites/sad-swirles-fc07f7/overview"
              className="netlify-code"
            >
              Netlify
            </a>{" "}
            💻
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
