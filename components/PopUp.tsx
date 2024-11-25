
import { FC } from 'react';
import Image from 'next/image';
import check from '../app/assets/checkmark.svg'

interface SuccessPopupProps {
  onClose: () => void; // Función para cerrar el popup
  loading: boolean;
}

const SuccessPopup: FC<SuccessPopupProps> = ({ onClose, loading }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center justify-center gap-5 w-3/4 sm:w-1/2 lg:w-1/3 xl:w-1/4 h-[35%]">
      
      {loading 
      ? <div className='flex justify-center items-center h-full w-full'>
        <span className="loader"></span>
      </div> 
      : 
      <>
        <Image src={check} alt='checkmark' width={80}></Image>
        <h2 className="text-2xl font-bold">¡Listo!</h2>
        <p className="text-gray-700">Te avisaremos para el proximo lanzamiento</p>
        <button onClick={onClose} className="px-4 py-2 bg-black text-white rounded hover:bg-slate-600 transition">Cerrar</button>
      </>}
      </div>
    </div>
  );
};

export default SuccessPopup;
