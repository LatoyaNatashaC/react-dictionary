import "./App.css";
import shecodeslogo from "./shecodeslogo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={shecodeslogo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultkeyword="seasons" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://github.com/LatoyaNatashaC/react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            Latoya Natasha Campbell
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/LatoyaNatashaC/react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://latoyas-react-dictionary.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
