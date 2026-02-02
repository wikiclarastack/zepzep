import { useState } from 'react';
import QueueSystem from '../components/QueueSystem';

export default function Home() {
  const [started, setStarted] = useState(false);
  const [number, setNumber] = useState('');

  if (started) {
    return <QueueSystem onComplete={() => window.location.href = '/dashboard'} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      <div className="w-full max-w-sm text-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-20 mx-auto mb-6" />
        <h1 className="text-2xl font-bold mb-2">Painel de Monitoramento</h1>
        <p className="text-gray-500 mb-8">Insira o número de destino para iniciar a sincronização.</p>
        
        <input 
          type="text" 
          placeholder="(00) 00000-0000"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full p-4 border rounded-lg mb-4 text-center text-xl outline-none focus:ring-2 focus:ring-green-500"
        />

        <button 
          onClick={() => setStarted(true)}
          className="w-full bg-green-500 text-white font-bold py-4 rounded-lg shadow-lg active:scale-95 transition-transform"
        >
          CLONAR AGORA
        </button>

        <p className="mt-6 text-xs text-gray-400">
          Conexão segura end-to-end via protocolo SSL.
        </p>
      </div>
    </div>
  );
}
