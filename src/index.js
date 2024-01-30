import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Portfolio from "./projectDetails"; // Correct import

export default function Index() {
  return (
    <Router>
      <Routes>
        <navbar />
        <Route path='/' element={<App />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Router>
  );
}
