import { useViews } from "./views";
import { Routes, Route } from "react-router-dom";

function App() {
  const { Login, Home } = useViews();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
