import { useLocation } from "react-router-dom";
import Button from "../../components/Button";

export default function ThankYouPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const utmSource = params.get("utm_source");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 text-center">
      <h1 className="text-5xl font-bold mb-4 text-green-400">Obrigado!</h1>
      <p className="text-xl mb-8">Sua compra foi concluída com sucesso.</p>
      <p className="text-md">
        Em breve você receberá um e-mail com os detalhes.
      </p>

      {utmSource && (
        <p className="mt-12 text-sm text-gray-400">
          Veio da fonte: {utmSource}
        </p>
      )}
      <Button to="/">Voltar ao inicio</Button>
    </div>
  );
}
