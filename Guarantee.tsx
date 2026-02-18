import { ArrowRight } from 'lucide-react';

function BeforeAfter() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            A transformação é real
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Veja o antes e depois de quem seguiu o método
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-rose-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ANTES</h3>
              <img
                src="https://i.ibb.co/wNdmM6Pp/Chat-GPT-Image-16-de-fev-de-2026-17-14-44.png"
                alt="Antes"
                className="rounded-xl shadow-lg mb-6 w-full max-w-sm mx-auto"
              />
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✗</span>
                  <span className="text-gray-700">Barriga sempre inchada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✗</span>
                  <span className="text-gray-700">Compulsão constante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✗</span>
                  <span className="text-gray-700">Roupas apertadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✗</span>
                  <span className="text-gray-700">Baixa autoestima</span>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex justify-center">
              <ArrowRight className="w-12 h-12 text-green-500" />
            </div>
            <div className="md:hidden flex justify-center my-4">
              <ArrowRight className="w-12 h-12 text-green-500 rotate-90" />
            </div>

            <div className="bg-green-50 rounded-2xl p-8 text-center border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">DEPOIS</h3>
              <img
                src="https://i.ibb.co/bM7HXKqS/Chat-GPT-Image-16-de-fev-de-2026-17-16-11.png"
                alt="Depois"
                className="rounded-xl shadow-lg mb-6 w-full max-w-sm mx-auto"
              />
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Barriga mais leve e sequinha</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Controle total da fome</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Roupas ficando folgadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Confiança renovada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;
