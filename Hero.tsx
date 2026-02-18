import { Gift, Coffee, UtensilsCrossed, ShoppingCart } from 'lucide-react';

function Bonuses() {
  const bonuses = [
    {
      icon: Coffee,
      title: 'Guia de chás desinchantes',
      value: 'R$ 27',
      description: 'Receitas especiais para potencializar seus resultados',
      image: 'https://i.ibb.co/kVfsd3tz/Chat-GPT-Image-22-de-jan-de-2026-23-06-48-1.png'
    },
    {
      icon: UtensilsCrossed,
      title: 'Cardápio 7 dias anti-inchaço',
      value: 'R$ 37',
      description: 'Plano pronto para você seguir sem pensar',
      image: 'https://i.ibb.co/k26MDZbV/Ebook-alimentos-llan.png'
    },
    {
      icon: ShoppingCart,
      title: 'Lista de supermercado inteligente',
      value: 'R$ 17',
      description: 'Faça compras certas e economize tempo',
      image: 'https://i.ibb.co/fdNL7P9b/Receitas-funcionais-01-1.png'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full mb-6">
              <Gift className="w-6 h-6" />
              <span className="font-bold text-lg">BÔNUS EXCLUSIVOS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Você também recebe de presente
            </h2>
            <p className="text-lg text-gray-600">
              Materiais complementares para acelerar seus resultados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-green-200"
              >
                <img
                src={bonus.image}
                alt={bonus.title}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
                <div className="text-center mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                    Valor: {bonus.value}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  BÔNUS {index + 1}
                </h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">
                  {bonus.title}
                </h4>
                <p className="text-gray-600 text-center">
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-gray-900">
              Valor total dos bônus:{' '}
              <span className="text-green-600 line-through">R$ 81</span>
              {' '}
              <span className="text-green-600">GRÁTIS</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bonuses;
