import React from 'react';

const Message = ({ sender, time, text }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold text-gray-700">{sender}</span>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <p className="text-gray-800">{text}</p>
    </div>
  );
};

export default Message;
