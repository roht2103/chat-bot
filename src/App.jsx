import "./App.css";
import { Nav } from "./components/Nav.jsx";
import { Header } from "./components/Header.jsx";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className=" h-screen overflow-auto">
              <Nav />
              <Header />
              <Routes>
                <Route path="/askora-chat-bot" />
              </Routes>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
