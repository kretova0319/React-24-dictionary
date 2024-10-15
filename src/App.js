import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Table from "./components/Table/Table";
import Carusel from "./components/Carusel/Carusel";

function App() {
  return (
    <div>
      <Header />
      {/* <Carusel /> */}
      <Carusel />
      <div className="container">
        <Table />
      </div>
      <Footer />
    </div>
  );
}

export default App;
