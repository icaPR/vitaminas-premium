import Slider from "react-slick";
import ProductCard, { type Product } from "../ProductCard";

export default function Product() {
  const products: Product[] = [
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
    },
    {
      id: 4,
      name: "PowerNatural",
      description: "Fortalece sua imunidade em 30 dias",
      price: 69.9,
      image:
        "https://cdn.shopify.com/s/files/1/0568/7744/9298/files/VITASIXRA-1FRASCO.png?v=1749222081",
      rating: 4.6,
      reviewCount: 203,
    },
    {
      id: 5,
      name: "KIt 3 x DigestWell",
      description: "Melhora digestão e saúde intestinal",
      price: 167.76,
      originalPrice: 209.7,
      image:
        "https://cdn.shopify.com/s/files/1/0568/7744/9298/files/lipo_com_caixa.png?v=1749221956",
      rating: 4.8,
      reviewCount: 174,
      discount: 20,
    },
    {
      id: 6,
      name: "DigestWell",
      description: "Melhora digestão e saúde intestinal",
      price: 75.9,
      image:
        "https://cdn.shopify.com/s/files/1/0568/7744/9298/files/metabolic_1_1.jpg?v=1749222100",
      rating: 4.5,
      reviewCount: 132,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
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
            Nossos Produtos
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Escolha a fórmula perfeita para suas necessidades e transforme sua
            saúde
          </p>
        </div>
        <div className=" gap-8">
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <div key={product.id} className="px-2 h-full">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
