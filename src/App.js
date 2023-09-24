import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Inicio } from "./components/Pages/Home";
import { About, Productos } from "./components/Pages/Products";
import { Blog, Distribucion } from "./components/Pages/Services";
import { Contact } from "./components/Pages/Contact";
function App() {
  return (
    <>
     <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/about" element={<Productos />} />
            <Route path="/blog" element={<Distribucion />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      
  </>
  );
}

export default App;
