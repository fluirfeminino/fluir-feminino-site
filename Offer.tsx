import { Heart, Leaf, Smile, Zap } from 'lucide-react';

function Solution() {
  const features = [
    {
      icon: Leaf,
      title: 'Método Natural',
      description: 'Sem produtos químicos ou suplementos caros'
    },
    {
      icon: Heart,
      title: 'Sem Restrições',
      description: 'Não precisa cortar tudo que você gosta de comer'
    },
    {
      icon: Smile,
      title: 'Sem Passar Fome',
      description: 'Estratégias para saciar e controlar a compulsão'
    },
    {
      icon: Zap,
      title: 'Aplicável Hoje',
      description: 'Funciona na sua rotina real, sem complicação'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A solução simples que já está ajudando{' '}
            <span className="text-rose-600">centenas de mulheres</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            Um método natural para desinchar, controlar a fome e conquistar leveza.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="bg-gradient-to-br from-rose-100 to-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
