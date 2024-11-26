'use client'
import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string; // La fecha objetivo en formato 'YYYY-MM-DDTHH:MM:SS'
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className='flex justify-center items-center md:pt-16 pt-5'>
      <h1 className='text-white font-jetbrains md:text-5xl lg:text-6xl sm:text-4xl text-3xl'>
        {String(timeLeft.days).padStart(2, '0')}D :{' '}
        {String(timeLeft.hours).padStart(2, '0')}H :{' '}
        {String(timeLeft.minutes).padStart(2, '0')}M :{' '}
        {String(timeLeft.seconds).padStart(2, '0')}S
      </h1>
    </div>
  );
};

export default Countdown;
