import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Services from "./pages/Service.jsx"
import Layout from "./components/Layout.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
