import React, { useState } from 'react';

const MessageMock = ({ type }: { type: string }) => (
  <div className="p-4 border-b bg-gray-50 relative overflow-hidden">
    <div className="filter blur-md">
      <p className="font-bold">Contato Privado</p>
      <p>Esta é uma mensagem de teste escondida pelo sistema...</p>
    </div>
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10">
      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs mb-1">
        IA: {type} detectado
      </span>
      <button className="bg-green-500 text-white px-4 py-1 rounded font-bold text-sm shadow">
        Desbloquear (3 créditos)
      </button>
    </div>
  </div>
);

export default function Dashboard() {
  const [credits, setCredits] = useState(0);
  const [paid, setPaid] = useState(false);

  if (!paid) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
        <div className="bg-white text-black p-8 rounded-lg max-w-sm w-full">
          <h2 className="text-xl font-bold mb-4">Liberação de Acesso</h2>
          <p className="mb-4 text-gray-600">Para visualizar os números e mensagens clonadas, é necessário o pagamento da taxa de manutenção.</p>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <p className="text-sm">Valor:</p>
            <p className="text-2xl font-bold text-green-600">R$ 43,12</p>
            <p className="text-xs text-gray-500">Créditos: 30 acessos</p>
          </div>
          <button 
            onClick={() => setPaid(true)}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600"
          >
            PAGAR VIA GATEWAY
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl">
      <div className="bg-[#075e54] text-white p-4 flex justify-between items-center">
        <span className="font-bold">WhatsApp Clone</span>
        <span className="bg-white/20 px-2 py-1 rounded text-xs">Créditos: {credits}</span>
      </div>
      <div className="flex flex-col">
        <MessageMock type="Mensagens de romance" />
        <MessageMock type="Conteúdo financeiro" />
        <MessageMock type="Mídia suspeita" />
        <MessageMock type="Conversas de trabalho" />
      </div>
    </div>
  );
}
