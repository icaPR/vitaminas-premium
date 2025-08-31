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

  return (
    <div className="text-center my-8">
      <Link
        to={destination}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        {children}
      </Link>
    </div>
  );
}
