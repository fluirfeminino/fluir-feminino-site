import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Em quanto tempo vejo resultados?',
      answer: 'Os primeiros resultados aparecem em 3 a 7 dias. A maioria das mulheres relata mudanças visíveis em 2 a 3 semanas.'
    },
    {
      question: 'É seguro?',
      answer: 'Sim! 100% natural. Sem produtos químicos, sem suplementos duvidosos, sem práticas extremas.'
    },
    {
      question: 'Como recebo o ebook?',
      answer: 'Link de download chega por e-mail em segundos após o pagamento. Acesso vitalício.'
    },
    {
      question: 'Tem garantia?',
      answer: 'Sim! 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu investimento.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Tire suas dúvidas antes de começar
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-rose-50 rounded-2xl overflow-hidden border-2 border-rose-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-rose-100 transition-colors duration-200"
                >
                  <span className="font-bold text-gray-900 text-lg pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-rose-600 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
