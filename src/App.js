import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <Weather city="Bucharest"/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
