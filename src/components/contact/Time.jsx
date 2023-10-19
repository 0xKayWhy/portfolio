import React, { useEffect } from 'react';

export const Time = ({ setRemainingTime,remainingTime,setAvail }) => {

  useEffect(() => {
    if (remainingTime > 0) {
      const interval = setInterval(() => {
        setRemainingTime((prevRemainingTime) => {
          const newRemainingTime = prevRemainingTime - 1000;
          localStorage.setItem('countdown', newRemainingTime);
          return newRemainingTime;
        });
      }, 1000);

      // Clear the interval when the component unmounts or when the timer reaches zero
      return () => {
        clearInterval(interval);
      };
    }

  }, [remainingTime,setAvail]);

  const minutes = Math.floor(remainingTime / 60000);
  const seconds = Math.floor((remainingTime % 60000) / 1000);

  return (
    <div className="contact__time">
      You can send again after {minutes} minutes : {seconds} seconds
    </div>
  );
};
