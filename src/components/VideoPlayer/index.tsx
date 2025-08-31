export default function VideoPlayer() {
  // Em uma implementação real, substitua pelo ID real do vídeo do YouTube
  const videoId = "iadafx0bMhs"; // Exemplo com o famoso "Never Gonna Give You Up"

  return (
    <div className="flex justify-center my-8 px-6">
      <div className="w-full max-w-2xl border-4 border-gray-200 rounded-lg overflow-hidden shadow-lg">
        <div className="relative pb-[56.25%] h-0">
          {" "}
          {/* Proporção 16:9 */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Vídeo sobre nossas vitaminas"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
