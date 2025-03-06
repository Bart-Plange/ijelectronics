import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Layout, ScrollToTop} from "./layouts";
import {Home, Contact, Service, PrivacyPolicy, TermsAndConditions} from "./pages";
import { Portfolio } from "./components";
import './App.css'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
