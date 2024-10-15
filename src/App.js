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
          <Dictionary />
        </main>
        <footer className="App-footer">
          This project was coded by Latoya Natasha Campbell and is open sourced
          on GitHub and hosted by Netlify
        </footer>
      </div>
    </div>
  );
}
