import Slider from "react-slick";
import TestimonialCard, { type Testimonial } from "../TestimonialCard";

export default function HeadTestimonialsline() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maria Silva",
      product: "VitalEnergy Plus",
      text: "Depois de apenas 2 semanas usando, minha energia durante o dia aumentou incrivelmente. Finalmente consigo acompanhar meus filhos!",
      image: "https://i.pravatar.cc/150?img=38",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Oliveira",
      product: "ImunoFort",
      text: "Há 3 meses não fico resfriado! Minha imunidade melhorou muito desde que comecei a tomar essas vitaminas.",
      image: "https://i.pravatar.cc/150?img=13",
      rating: 5,
    },
    {
      id: 3,
      name: "Ana Santos",
      product: "VitalEnergy Plus",
      text: "Sou nutricionista e recomendo estas vitaminas para meus clientes. A fórmula é completa e os resultados são visíveis.",
      image: "https://i.pravatar.cc/150?img=30",
      rating: 4,
    },
    {
      id: 4,
      name: "João Pereira",
      product: "ImunoFort",
      text: "Desde que comecei a tomar, minhas defesas melhoraram e meu cansaço crônico desapareceu. Recomendo!",
      image: "https://i.pravatar.cc/150?img=55",
      rating: 5,
    },
    {
      id: 5,
      name: "Fernanda Costa",
      product: "VitalEnergy Plus",
      text: "Resultados impressionantes! Minha pele, cabelo e unhas nunca estiveram tão saudáveis. Vale cada centavo!",
      image: "https://i.pravatar.cc/150?img=29",
      rating: 5,
    },
    {
      id: 6,
      name: "Ricardo Almeida",
      product: "ImunoFort",
      text: "Como atleta, preciso de suplementação de qualidade. Estas vitaminas superaram todas as minhas expectativas!",
      image: "https://i.pravatar.cc/150?img=3",
      rating: 5,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Veja depoimentos reais de pessoas que transformaram sua saúde com
            nossas vitaminas
          </p>
        </div>

        {/* Versão desktop: grid normal */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Versão mobile: carrossel */}
        <div className="md:hidden">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-2">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
