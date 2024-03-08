import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer/footer";
import CicloVital from "./pages/CicloVital/CicloVital";
import Index from "./pages/Index/Index";
import Popup from "./componentes/Popup/Popup";
import Examenes from "./pages/Examenes/Examenes";
import Localizacion from "./pages/Localizacion/Localizacion";
import ScrollList from "./componentes/ScrollList/ScrollList";
import Vacunas from "./pages/Vacunas/Vacunas";
import Selector from "./componentes/Selector/Selector";
function App() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>

      <main className="main">
        {/* <CicloVital /> */}
        {/* <CicloVital /> */}
        {/* <Index /> */}
        {/* <Popup /> */}
        {/* <ScrollList /> */}
        {/* <Popup /> */}
        {/* <Examenes /> */}
        {/* <Localizacion /> */}
        <ScrollList />
        <Popup />
      </main>

      <Footer />
    </>
  );
}

export default App;
