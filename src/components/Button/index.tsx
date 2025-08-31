import { Link } from "react-router-dom";

const getUtmQueryString = () => {
  const storedParams = sessionStorage.getItem("utm_params");
  if (storedParams) {
    const utms = JSON.parse(storedParams);
    return new URLSearchParams(utms).toString();
  }
  return "";
};

interface ButtonProps {
  to: string;
  children: React.ReactNode;
}

export default function Button({ to, children }: ButtonProps) {
  const utmQueryString = getUtmQueryString();
  const destination = `${to}?${utmQueryString}`;

  function handleClick() {
    const productsToSave = [
      {
        id: 1,
        name: "VitalEnergy Plus",
        description: "Complexo vitamínico para energia e disposição",
        price: 89.9,
        originalPrice: 119.9,
        image:
          "https://cdn.shopify.com/s/files/1/0568/7744/9298/files/LipoSix_MOCKUP.png?v=1749221956",
        rating: 4.8,
        reviewCount: 247,
        discount: 25,
        quantity: 1,
        savedAt: new Date().toISOString(),
      },
      {
        id: 2,
        name: "KIt 3 x PowerNatural",
        description: "Fortalece sua imunidade em 30 dias",
        price: 167.76,
        originalPrice: 209.7,
        image:
          "https://cdn.shopify.com/s/files/1/0568/7744/9298/files/CAPA-PRODUTO-02.png?v=1749222063",
        rating: 4.7,
        reviewCount: 189,
        discount: 20,
        quantity: 1,
        savedAt: new Date().toISOString(),
      },
      {
        id: 3,
        name: "KIt 3 x VitalEnergy Plus",
        description: "Complexo vitamínico para energia e disposição",
        price: 266,
        originalPrice: 359.7,
        image:
          "https://cdn.shopify.com/s/files/1/0568/7744/9298/files/CAPA-PRODUTO-03.png?v=1749221956",
        rating: 4.9,
        reviewCount: 156,
        discount: 26,
        quantity: 1,
        savedAt: new Date().toISOString(),
      },
    ];

    const existingHistory = JSON.parse(
      localStorage.getItem("checkoutHistory") || "[]"
    );
    const updatedHistory = [...existingHistory, ...productsToSave];
    localStorage.setItem("checkoutHistory", JSON.stringify(updatedHistory));
  }

  return (
    <div className="text-center my-8">
      <Link
        to={destination}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleClick}
      >
        {children}
      </Link>
    </div>
  );
}
