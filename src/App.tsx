import "./App.css";
import { HomePage } from "@/pages/HomePage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HangmanPage } from "@/pages/HangmanPage.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hangman" element={<HangmanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
