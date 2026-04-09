import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
export default App;
