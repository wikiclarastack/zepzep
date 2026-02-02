import React, { useState, useEffect } from 'react';

const messages = [
  "Nossa, deu super certo! Consegui ver tudo.",
  "Estou aqui na fila de novo pra ver as conversas do meu noivo!",
  "Demora um pouco mas vale a pena, o acesso liberou rápido após o pix.",
  "Anônimo#15: Alguém mais esperando há mais de 10 min?",
  "Anônimo#88: Sim, mas o meu já liberou os créditos agora."
];

export default function QueueSystem({ onComplete }: { onComplete: () => void }) {
  const [timeLeft, setTimeLeft] = useState(0);
  const [chatMsgs, setChatMsgs] = useState<string[]>([]);

  useEffect(() => {
    const randomTime = Math.floor(Math.random() * (1800 - 300 + 1)) + 300;
    setTimeLeft(randomTime);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const chatInterval = setInterval(() => {
      const randomMsg = `Anônimo#${Math.floor(Math.random() * 100)}: ${messages[Math.floor(Math.random() * messages.length)]}`;
      setChatMsgs(prev => [...prev.slice(-5), randomMsg]);
    }, 4000);

    return () => {
      clearInterval(timer);
      clearInterval(chatInterval);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-red-600 mb-4">ALTA DEMANDA</h2>
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md text-center">
        <p className="mb-2">Sua posição na fila: {Math.floor(timeLeft / 10)}</p>
        <p className="text-4xl font-mono mb-4">{formatTime(timeLeft)}</p>
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
          <div className="bg-green-500 h-full transition-all" style={{ width: `${(1 - timeLeft/1800) * 100}%` }}></div>
        </div>
      </div>

      <div className="mt-8 w-full max-w-md bg-white rounded shadow p-4">
        <h3 className="border-b pb-2 mb-2 font-semibold">Chat ao vivo</h3>
        <div className="h-48 overflow-y-auto text-sm space-y-2">
          {chatMsgs.map((m, i) => (
            <p key={i} className="bg-gray-50 p-2 rounded"><strong>{m}</strong></p>
          ))}
        </div>
      </div>
    </div>
  );
}
