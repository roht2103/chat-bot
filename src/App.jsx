import "./App.css";
import { Nav } from "./components/Nav.jsx";
import { Header } from "./components/Header.jsx";

function App() {
  return (
    <div className=" h-screen overflow-auto">
      <Nav />
      <Header />
    </div>
  );
}

export default App;
