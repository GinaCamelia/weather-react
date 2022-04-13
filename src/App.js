import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App text-center lh-lg mt-5 mb-5">
      <div className="container mt-5">
        <Weather city="London"/>
        <Footer />
        </div>
    </div>
  );
}
