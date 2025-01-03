'use client';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import SuccessPopup from './PopUp';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [popup, setPopup] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  // const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      // setMessage('Por favor, ingresa un correo válido.');
      return;
    }

    const templateParams = {
        nombre: name,
        correo: email, // Asegúrate de que coincide con tu plantilla en EmailJS
    };

    try {
      // Envía el correo usando EmailJS
      setPopup(true); // Muestra el pop-up de éxito
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Template ID
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Public Key
      );
      // setMessage('¡Correo enviado correctamente!');
      setLoading(false);
      setEmail(''); 
      setName(''); 
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      // setMessage('Error al enviar el correo. Inténtalo de nuevo.');
    }
  };

  return (
    <div className='w-screen flex justify-center px-14 font-jetbrains text-white'>
      <form onSubmit={handleSubmit} className='w-72 bg-transparent grid grid-rows-2 backdrop-blur-[5px] text-white border-2 border-white'>
        <input
            type="email"
            placeholder='EMAIL'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='py-3 border-b-2 border-white bg-transparent placeholder-white pl-5 w-full focus:outline-none'
            required
        />
        
        <div className='flex flex-row justify-center items-center'>
          <button type='submit' className=''>ENVIAR</button>
        </div>
      </form>
      {popup && <SuccessPopup onClose={() => setPopup(false)} loading={loading}/>}
    </div>
  );
};

export default EmailForm;
