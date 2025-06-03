import React from "react";
import deepscan from "../../assets/deepscan.png";
import legibet from "../../assets/legibet.png";
import Title from "../Title";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      title: ".Deepscan",
      image: deepscan,
      description:
        "O Deepscan é uma ferramenta inteligente desenvolvida para atender às exigências regulatórias do setor de apostas. Com foco total em conformidade com as diretrizes do CONAR, realiza varreduras automatizadas em perfis de redes sociais para identificar conteúdos que possam infringir normas de publicidade.",
      features: [
        "Promoções enganosas ou sem aviso de responsabilidade",
        "Comunicação voltada a menores de idade",
        "Publicidade de bônus ou prêmios sem regras claras",
        "Linguagem que estimula o jogo excessivo",
      ],
      conclusion:
        "Com o Deepscan, sua operação se mantém em conformidade com o CONAR, evitando sanções, protegendo sua reputação e garantindo uma atuação responsável no ambiente digital.",
    },
    {
      title: ".Legibet",
      image: legibet,
      description:
        "O Legibet é uma solução avançada desenvolvida para identificar e prevenir ações fraudulentas dentro de casas de apostas. Combinando análise de dados, machine learning e inteligência comportamental, monitora atividades em tempo real para detectar padrões suspeitos.",
      features: [
        "Detecção de múltiplas contas ligadas ao mesmo usuário (multi-accounting)",
        "Análise de padrões incomuns de apostas e ganhos",
        "Identificação de uso de bots ou automações ilegais",
        "Monitoramento de manipulação de resultados e apostas combinadas",
        "Geração de alertas automáticos para equipes de compliance e segurança",
      ],
      conclusion:
        "Com o Legibet, sua operação se torna mais segura, eficiente e protegida contra riscos financeiros e reputacionais, garantindo um ambiente de apostas justo e transparente.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-20 max-w-6xl 2xl:mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <Title title="Nossos Produtos" />

          <div className="mt-4 sm:mt-6 max-w-2xl mx-auto">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-4">
              Soluções inteligentes e inovadoras para o mercado de apostas e
              compliance
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {products.map((product, index) => (
            <div key={index} className="group">
              <ProductCard
                title={product.title}
                image={product.image}
                description={product.description}
                features={product.features}
                conclusion={product.conclusion}
                isReversed={index % 2 !== 0}
              />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 sm:p-8 md:p-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Descubra como nossos produtos podem otimizar sua operação e
              garantir total conformidade regulatória.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                Solicitar demonstração
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105">
                Falar com especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
