import { Check, Lock, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

function Offer() {
  const [timeLeft, setTimeLeft] = useState(20 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleCheckout = () => {
    window.location.href = 'https://pay.wiapy.com/T75F5UtoK-';
  };

  return (
    <section id="offer" className="py-16 md:py-24 bg-gradient-to-br from-rose-600 to-pink-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-center py-4">
              <p className="text-white font-bold text-lg mb-2">
                OFERTA ESPECIAL POR TEMPO LIMITADO
              </p>
              <p className="text-white font-bold text-2xl">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </p>
            </div>

            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Comece sua transformação agora
              </h2>

              <div className="bg-rose-50 rounded-2xl p-8 mb-8">
                <div className="text-center mb-6">
                  <p className="text-gray-600 text-lg mb-2">De:</p>
                  <p className="text-3xl text-gray-400 line-through font-bold">R$ 97,00</p>
                  <p className="text-gray-600 text-lg mt-4 mb-2">Por apenas:</p>
                  <p className="text-6xl font-bold text-rose-600 mb-2">R$ 27</p>
                  <p className="text-gray-600">Pagamento único</p>
                </div>

                <div className="space-y-3">
                  {[
                    'Ebook completo Barriga Leve Feminina',
                    'Plano alimentar desinchante',
                    'Guia de controle da compulsão',
                    'BÔNUS 1: Guia de chás desinchantes',
                    'BÔNUS 2: Cardápio 7 dias anti-inchaço',
                    'BÔNUS 3: Lista de supermercado inteligente',
                    'Acesso imediato e vitalício',
                    'Garantia de 7 dias'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 mb-6"
              >
                QUERO MINHA BARRIGA LEVE AGORA
              </button>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>Compra 100% segura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Acesso imediato</span>
                </div>
              </div>

              <div className="mt-8 text-center">
                <img
                  src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.png?auto=compress&cs=tinysrgb&w=400"
                  alt="Formas de pagamento"
                  className="inline-block h-8 opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
