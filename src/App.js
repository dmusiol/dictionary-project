import './styles/App.css';
import DictionaryForm from "./DictionaryForm";
import Footer from "./Footer";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1 className="text-center">Dictionary</h1>
          <h3 className="text-center">What word are you looking for?</h3>
        </header>
        <main>
          <DictionaryForm/>
        </main>
        <Footer />
      </div>
    </div>
  );
}


