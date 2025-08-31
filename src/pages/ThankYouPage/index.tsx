import { useLocation, useNavigate } from "react-router-dom";

export default function ThankYouPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 text-center">
      <h1 className="text-5xl font-bold mb-4 text-green-400">Obrigado!</h1>
      <p className="text-xl mb-8">Sua compra foi concluída com sucesso.</p>
      <p className="text-md">
        Em breve você receberá um e-mail com os detalhes.
      </p>

      {(utmSource || utmMedium || utmCampaign) && (
        <div className="mt-6 p-4 bg-blue-800 rounded-lg">
          <h3 className="font-semibold mb-2">Dados UTM recebidos:</h3>
          {utmSource && <p className="text-sm">Fonte: {utmSource}</p>}
          {utmMedium && <p className="text-sm">Mídia: {utmMedium}</p>}
          {utmCampaign && <p className="text-sm">Campanha: {utmCampaign}</p>}
        </div>
      )}

      <button
        onClick={() => navigate("/")}
        className="w-50 mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
      >
        Voltar ao inicio
      </button>
    </div>
  );
}
