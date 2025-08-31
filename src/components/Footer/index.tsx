import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-white pt-12 px-4 mt-2">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <p className="text-sm text-white mb-4">
            <strong>Disclaimer:</strong> Este é um projeto demonstrativo criado
            para fins educacionais e de portfólio. As informações, produtos e
            depoimentos apresentados nesta página são fictícios e não devem ser
            considerados como recomendações médicas ou de saúde reais. Consulte
            sempre um profissional de saúde antes de iniciar qualquer tratamento
            ou suplementação.
          </p>

          <p className="text-xs text-white opacity-90">
            © {new Date().getFullYear()} Vitaminas Premium - Todos os direitos
            reservados. Esta é uma página demonstrativa e não está associada a
            nenhuma marca real de vitaminas ou suplementos.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="/politica-privacidade"
            className="text-gray-300 hover:text-green-400 text-sm transition-colors"
            onClick={(e) => {
              e.preventDefault();
              alert(
                "Esta é uma demonstração. Em um site real, este link levaria à política de privacidade."
              );
            }}
          >
            Política de Privacidade
          </a>
          <a
            href="/termos-uso"
            className="text-gray-300 hover:text-green-400 text-sm transition-colors"
            onClick={(e) => {
              e.preventDefault();
              alert(
                "Esta é uma demonstração. Em um site real, este link levaria aos termos de uso."
              );
            }}
          >
            Termos de Uso
          </a>
          <a
            href="/contato"
            className="text-gray-300 hover:text-green-400 text-sm transition-colors"
            onClick={(e) => {
              e.preventDefault();
              alert(
                "Esta é uma demonstração. Em um site real, este link levaria à página de contato."
              );
            }}
          >
            Contato
          </a>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://www.linkedin.com/in/%C3%ADcaro-ramos-580423253/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size="26" />
          </a>
          <a
            href="https://github.com/icapr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size="26" />
          </a>
        </div>

        <div className="text-center border-t border-gray-700 pt-4">
          <p className="text-xs text-white opacity-60">
            🚀 Projeto demonstrativo desenvolvido para fins educacionais. As
            informações não devem ser levadas a sério ou utilizadas para tomar
            decisões de saúde.
          </p>
        </div>
      </div>
    </footer>
  );
}
