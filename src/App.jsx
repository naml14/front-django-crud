import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import DataPage from "./pages/DataPage/DataPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/data" element={<DataPage />} />
    </Routes>
  );
}

export default App;
