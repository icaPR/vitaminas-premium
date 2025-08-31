import { Link } from "react-router-dom";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  discount?: number;
}

export default function ProductCard({ product }: { product: Product }) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  const saveToCheckout = () => {
    const checkoutItem = {
      name: product.name,
      price: product.price,
      image: product.image,
      id: product.id || Date.now(), // usar id do produto ou timestamp como fallback
      quantity: 1,
      savedAt: new Date().toISOString(),
    };

    try {
      const existingItem = localStorage.getItem("checkoutItem");

      if (existingItem) {
        localStorage.setItem("checkoutItem", JSON.stringify(checkoutItem));
        alert(`${product.name} foi atualizado para checkout!`);
      } else {
        localStorage.setItem("checkoutItem", JSON.stringify(checkoutItem));
        alert(`${product.name} foi salvo para checkout!`);
      }

      const history = JSON.parse(
        localStorage.getItem("checkoutHistory") || "[]"
      );
      history.push(checkoutItem);
      localStorage.setItem(
        "checkoutHistory",
        JSON.stringify(history.slice(-10))
      );
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
      alert("Erro ao salvar produto. Tente novamente.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mx-2 h-full flex flex-col">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            -{product.discount}%
          </div>
        )}
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>

        <div className="mt-3">
          {renderStars(product.rating)}
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviewCount} avaliações)
          </span>
        </div>

        <div className="mt-4 flex items-center">
          <span className="text-2xl font-bold text-green-600">
            R$ {product.price.toFixed(2)}
          </span>

          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              R$ {product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <Link to={"/checkout"}>
          <button
            className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors w-full"
            onClick={saveToCheckout}
          >
            Comprar Agora
          </button>
        </Link>
      </div>
    </div>
  );
}
