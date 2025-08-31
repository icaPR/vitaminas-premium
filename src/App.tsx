import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ThankYouPage from "./pages/ThankYouPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thanks" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
}

export default App;
