import "./App.css";
import { Nav } from "./components/Nav.jsx";
import { Header } from "./components/Header.jsx";
import { ChatBot } from "./pages/ChatBot.jsx";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <Routes>
              <Route
                path="/"
                element={
                  <div className=" h-screen overflow-auto">
                    <Nav />
                    <Header />
                  </div>
                }
              />

              <Route path="/askora-chat-bot" element={<ChatBot />} />
            </Routes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
