import { Heart } from 'lucide-react';

function Footer() {

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
            <h3 className="text-2xl font-bold">Barriga Leve Feminina</h3>
          </div>

          <p className="text-gray-400 mb-8 leading-relaxed">
            O método natural para desinchar, controlar a fome e viver mais leve.
          </p>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm mb-4">
              Este produto é comercializado com garantia de satisfação através da plataforma Hotmart.
              O conteúdo é de responsabilidade do produtor.
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Barriga Leve Feminina. Todos os direitos reservados.
            </p>
          </div>

          <div className="mt-8 text-xs text-gray-600">
            <p className="mb-2">
              Aviso Legal: Os resultados podem variar de pessoa para pessoa. Este produto não substitui
              orientação médica ou nutricional profissional.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
