import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button";
import Headline from "../../components/Headline";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import Testimonials from "../../components/Testimonials";
import VideoPlayer from "../../components/VideoPlayer";
import Benefits from "../../components/Benefits";
import Footer from "../../components/Footer";

const useUtmTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const utmParams: { [key: string]: string | null } = {};
    const utmKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ];

    utmKeys.forEach((key) => {
      if (params.has(key)) {
        utmParams[key] = params.get(key);
      }
    });

    if (Object.keys(utmParams).length > 0) {
      sessionStorage.setItem("utm_params", JSON.stringify(utmParams));
    }
  }, [location]);
};

function LandingPage() {
  useUtmTracker();

  return (
    <>
      <Navbar />
      <div className="mx-auto py-8">
        <Headline />
        <VideoPlayer />
        <Button to="/checkout"> COMPRAR AGORA KIT COMPLETO - 25% OFF 🛒</Button>
        <Benefits />
        <Product />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
