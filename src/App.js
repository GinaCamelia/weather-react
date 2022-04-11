import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App text-center lh-lg mt-5 mb-5">
        <h1>Hello from React</h1>
        <Weather city="Bucharest"/>
        <Footer />
    </div>
  );
}
