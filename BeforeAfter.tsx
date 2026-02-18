import { AlertCircle } from 'lucide-react';

function PainPoints() {
  const pains = [
    'Barriga inchada mesmo comendo pouco',
    'Vontade constante de doce',
    'Retenção de líquido',
    'Dificuldade para manter dieta'
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Você se identifica com isso?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {pains.map((pain, index) => (
              <div
                key={index}
                className="bg-rose-50 border-2 border-rose-100 rounded-2xl p-6 flex items-start gap-4 text-left hover:shadow-lg transition-shadow duration-200"
              >
                <AlertCircle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                <p className="text-gray-800 font-medium text-lg">{pain}</p>
              </div>
            ))}
          </div>

          <p className="text-xl text-gray-700 mt-12 font-medium">
            Se você disse sim para pelo menos uma dessas situações,{' '}
            <span className="text-rose-600 font-bold">este método foi feito para você!</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default PainPoints;
