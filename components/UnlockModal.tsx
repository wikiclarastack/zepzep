import React from 'react';

export default function UnlockModal({ isOpen, onConfirm, onCancel }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-xs text-center">
        <h3 className="text-lg font-bold mb-2">Confirmar Acesso</h3>
        <p className="text-gray-600 mb-6">Deseja gastar 3 créditos para desbloquear estas mensagens?</p>
        <div className="flex flex-col gap-2">
          <button 
            onClick={onConfirm}
            className="bg-green-600 text-white py-2 rounded-full font-bold"
          >
            Sim, Desbloquear
          </button>
          <button 
            onClick={onCancel}
            className="text-gray-500 py-2"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
