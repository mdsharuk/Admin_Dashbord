import { Route, Routes } from "react-router-dom";
import ProdectsPage from "./pages/ProdectsPage";
import OverviewPage from "./pages/OverviewPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="flex inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className=" absolute inset-0 backdrop-blur-sm" />
      </div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />}></Route>
        <Route path="/products" element={<ProdectsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
