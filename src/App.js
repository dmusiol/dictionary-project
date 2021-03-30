import './App.css';
import Dictionary from "./DictionaryForm";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1 className="text-center">Dictionary</h1>
          <h3 className="text-center">What word are you looking for?</h3>
        </header>
        <main>
          <Dictionary/>
        </main>
      </div>
      <footer className="coded-by"></footer>
    </div>
  );
}

