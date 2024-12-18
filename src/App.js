import style from "./app.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Table from "./components/Table/Table";
import Carusel from "./components/Carusel/Carusel";
import Tile from "./components/Tile/Tile";
import Error from "./components/404/Error";
import { WordsProvider } from "./Context/WordsContext";

function App() {
  return (
    <WordsProvider>
      <Router>
        <Header />
        <main className={style.wrapper__main}>
          <Routes>
            <Route path="/" element={<Table />} />
            <Route path="/table" element={<Table />} />
            <Route path="/game" element={<Carusel />} />
            <Route path="/tile" element={<Tile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </WordsProvider>
  );
}

export default App;
