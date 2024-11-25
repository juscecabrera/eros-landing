// components/SuccessPopup.tsx
import { FC } from 'react';
import Image from 'next/image';
import check from '../app/assets/checkmark.svg'

interface SuccessPopupProps {
  onClose: () => void; // Función para cerrar el popup
}

const SuccessPopup: FC<SuccessPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center gap-5">
        <Image src={check} alt='checkmark' width={80}></Image>
        <h2 className="text-2xl font-bold">¡Listo!</h2>
        <p className="text-gray-700">Te avisaremos para el proximo lanzamiento</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-black text-white rounded hover:bg-slate-600 transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
