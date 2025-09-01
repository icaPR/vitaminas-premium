import { useState, useEffect, useMemo } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import {
  FaCreditCard,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaBarcode,
} from "react-icons/fa";
import { FaPix } from "react-icons/fa6";

type CheckoutProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  savedAt: string;
};

const CHECKOUT_STORAGE_KEY = "checkoutHistory";

export default function CheckoutPage() {
  const navigate = useNavigate();

  const [checkoutItems, setCheckoutItems] = useState<CheckoutProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "credit",
  });

  useEffect(() => {
    try {
      const itemsJSON = localStorage.getItem(CHECKOUT_STORAGE_KEY);
      const items = itemsJSON ? JSON.parse(itemsJSON) : [];
      setCheckoutItems(items);
    } catch (error) {
      console.error("Erro ao carregar itens do checkout:", error);
      setCheckoutItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const totalPrice = useMemo(() => {
    return checkoutItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [checkoutItems]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFinalizePurchase = () => {
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.address.trim() ||
      !formData.city.trim() ||
      !formData.zipCode.trim()
    ) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    alert("Compra finalizada com sucesso!");

    try {
      localStorage.removeItem(CHECKOUT_STORAGE_KEY);
      setCheckoutItems([]);
    } catch (error) {
      console.error("Erro ao limpar o histórico do checkout:", error);
    }
    const getUtmQueryString = () => {
      const storedParams = sessionStorage.getItem("utm_params");
      if (storedParams) {
        const utms = JSON.parse(storedParams);
        return new URLSearchParams(utms).toString();
      }
      return "";
    };
    const utmQueryString = getUtmQueryString();
    navigate(`/thanks?${utmQueryString}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Carregando...</p>
      </div>
    );
  }

  if (checkoutItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl font-bold mb-4">Carrinho Vazio</h1>
        <p className="text-lg mb-8">Nenhum produto encontrado no checkout.</p>
        <Button to="/">Voltar às Compras</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Finalizar Compra
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
            <div className="space-y-4">
              {checkoutItems.map((item) => (
                <div
                  key={`${item.id}-${item.savedAt}`}
                  className="flex items-center space-x-4 p-4 border rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Quantidade: {item.quantity}
                    </p>
                    <p className="text-xs text-gray-500">
                      Adicionado em:{" "}
                      {new Date(item.savedAt).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-green-600">
                  R$ {totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Dados de Entrega e Pagamento
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Endereço *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CEP *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>
            </form>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Forma de Pagamento
              </h3>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      paymentMethod: "credit",
                    }))
                  }
                  className={`flex items-center space-x-2 p-3 border rounded-lg transition-colors ${
                    formData.paymentMethod === "credit"
                      ? "border-green-500 ring-2 ring-green-500"
                      : "border-gray-300"
                  }`}
                >
                  <FaCreditCard className="text-2xl text-green-600" />
                  <span className="font-medium text-gray-700">
                    Cartão de Crédito
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      paymentMethod: "boleto",
                    }))
                  }
                  className={`flex items-center space-x-2 p-3 border rounded-lg transition-colors ${
                    formData.paymentMethod === "boleto"
                      ? "border-green-500 ring-2 ring-green-500"
                      : "border-gray-300"
                  }`}
                >
                  <FaBarcode className="text-2xl text-green-600" />
                  <span className="font-medium text-gray-700">Boleto</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, paymentMethod: "pix" }))
                  }
                  className={`flex items-center space-x-2 p-3 border rounded-lg transition-colors ${
                    formData.paymentMethod === "pix"
                      ? "border-green-500 ring-2 ring-green-500"
                      : "border-gray-300"
                  }`}
                >
                  <FaPix className="text-2xl text-green-600" />
                  <span className="font-medium text-gray-700">Pix</span>
                </button>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Bandeiras de Cartão
              </h3>
              <div className="flex space-x-4">
                <FaCcVisa className="text-4xl text-gray-700" />
                <FaCcMastercard className="text-4xl text-gray-700" />
                <FaCcPaypal className="text-4xl text-gray-700" />
              </div>
            </div>

            <div className="flex flex-col space-y-3 mt-6">
              <button
                onClick={handleFinalizePurchase}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                Finalizar Compra - R$ {totalPrice.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
