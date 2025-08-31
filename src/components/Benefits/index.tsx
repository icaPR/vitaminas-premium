import Slider from "react-slick";
import type { BenefitCardProps } from "../BenefitCard";
import BenefitCard from "../BenefitCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Benefits() {
  const benefitsData: BenefitCardProps[] = [
    {
      image:
        "	https://cdn.shopify.com/s/files/1/0568/7744/9298/collections/saude-digestiva.jpg?v=1745873953",
      title: "Mais Energia",
      description:
        "Aumente sua disposição no dia a dia com nossa fórmula energética",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0568/7744/9298/collections/colageno.webp?v=1745878702",
      title: "Imunidade Fortalecida",
      description: "Proteja-se contra doenças com nosso complexo de vitaminas",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0568/7744/9298/files/manipulation3.png?v=1749222035",
      title: "Sono Restaurador",
      description: "Durma melhor e acorde revigorado todas as manhãs",
    },
  ];

  // Configurações do carrossel para mobile
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Princiapis Benefícios
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Nossas vitaminas foram desenvolvidas para oferecer resultados reais
            e transformadores para sua saúde
          </p>
        </div>

        {/* Versão desktop: grid normal */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              image={benefit.image}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        {/* Versão mobile: carrossel */}
        <div className="md:hidden">
          <Slider {...sliderSettings}>
            {benefitsData.map((benefit, index) => (
              <div key={index} className="px-2">
                <BenefitCard
                  image={benefit.image}
                  title={benefit.title}
                  description={benefit.description}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
