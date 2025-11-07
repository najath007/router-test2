import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import Home from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact"; 
import AddStudent from "./components/pages/AddStudent";
import EditStudent from "./components/pages/EditStudent";
import ViewStudent from "./components/pages/ViewStudent";


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div style={{ marginLeft: "220px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
          <Route path="/view/:id" element={<ViewStudent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
