interface FloatingCTAProps {
  show: boolean;
  onClick: () => void;
}

function FloatingCTA({ show, onClick }: FloatingCTAProps) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-white font-bold text-lg">Barriga Leve Feminina</p>
              <p className="text-white/90 text-sm">Apenas R$ 27</p>
            </div>
            <button
              onClick={onClick}
              className="flex-1 sm:flex-none bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              GARANTIR AGORA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloatingCTA;
