import React from "react";

export const Time = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60000);
  const seconds = Math.floor((remainingTime % 60000) / 1000);

  return (
    <div className="contact__time">
      You can send again after {minutes} minutes : {seconds} seconds
    </div>
  );
};
