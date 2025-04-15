import "./App.css";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Cards from "./components/Cards";
import { CountriesProvider } from "./context/CountriesContext.jsx";

function App() {
  return (
    <CountriesProvider>
      <div className="App">
        <Banner />
        <Form />
        <hr></hr>
        <Cards />
      </div>
    </CountriesProvider>
  );
}

export default App;
