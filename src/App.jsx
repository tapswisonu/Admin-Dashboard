import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/OtherPage/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
