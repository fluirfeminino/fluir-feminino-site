import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-3 px-4 text-center sticky top-0 z-50 shadow-lg">
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <Clock className="w-5 h-5 animate-pulse" />
        <span className="font-semibold text-sm md:text-base">
          Oferta por tempo limitado:
        </span>
        <div className="flex gap-2 font-bold">
          <span className="bg-white/20 px-3 py-1 rounded">
            {String(timeLeft.hours).padStart(2, '0')}h
          </span>
          <span className="bg-white/20 px-3 py-1 rounded">
            {String(timeLeft.minutes).padStart(2, '0')}m
          </span>
          <span className="bg-white/20 px-3 py-1 rounded">
            {String(timeLeft.seconds).padStart(2, '0')}s
          </span>
        </div>
      </div>
    </div>
  );
}

export default CountdownBanner;
