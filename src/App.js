import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <h1>Hello from React</h1>
        <Weather city="Bucharest"/>
        <Footer />
    </div>
  );
}

export default App;
