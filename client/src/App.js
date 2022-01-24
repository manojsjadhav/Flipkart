import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Card/Cart";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import { TemplateProvider } from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import DetailView from "./Components/ItemDetails/DetailView";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/product/:id" element={<DetailView />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
