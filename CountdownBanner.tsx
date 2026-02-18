import { BookOpen, CheckCircle2, ListChecks, Lightbulb, Calendar } from 'lucide-react';

function WhatYouGet() {
  const items = [
    {
      icon: BookOpen,
      title: 'Ebook completo em PDF',
      description: 'Acesso vitalício'
    },
    {
      icon: Calendar,
      title: 'Plano alimentar desinchante',
      description: '7 dias estruturado'
    },
    {
      icon: ListChecks,
      title: 'Lista de alimentos anti-inchaço',
      description: 'O que comer'
    },
    {
      icon: Lightbulb,
      title: 'Guia de controle da compulsão',
      description: 'Dominar a fome emocional'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            O que você vai receber
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Tudo que você precisa
          </p>

          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white to-rose-50 border-2 border-rose-100 rounded-2xl p-6 md:p-8 flex items-start gap-6 hover:shadow-lg transition-all duration-200"
              >
                <div className="bg-rose-500 rounded-xl p-3 flex-shrink-0">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatYouGet;
