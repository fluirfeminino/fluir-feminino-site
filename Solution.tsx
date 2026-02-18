import { Star } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Juliana Costa',
      age: 34,
      text: 'Em 10 dias minha barriga desinchcou! Coloquei minha calça jeans que estava guardada há meses. Funciona de verdade.',
      rating: 5
    },
    {
      name: 'Mariana Silva',
      age: 29,
      text: 'Finalmente controlo minha compulsão por doces. As estratégias do ebook me ajudaram a entender minha fome e comer com consciência.',
      rating: 5
    },
    {
      name: 'Patricia Almeida',
      age: 41,
      text: 'Dietas nunca davam certo. Com o Barriga Leve encontrei um método que se encaixa na minha rotina. Perdi 4kg sem sofrimento!',
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            O que elas estão dizendo
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Histórias reais de mulheres que transformaram seus corpos
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.age} anos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
