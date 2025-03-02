import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Layout} from "./layouts";
import {Home, Contact, Service} from "./pages";
import './App.css'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
