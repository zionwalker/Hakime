import React, { useState } from 'react';
import ChatList from './ChatList';
import Message from './Message';

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-1/4 p-4 bg-white border-r border-gray-300">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Personal</h2>
        <ChatList onSelectUser={setSelectedUser} />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-4 overflow-y-scroll bg-white">
          <Message sender="Betse Bro" time="21:24" text="https://meet.google.com/thk-qssm-htu" />
          <Message sender="You" time="21:22" text="awo yekidmun aynet" />
          <Message sender="Betse Bro" time="21:21" text="lela link lelak" />
        </div>
        <div className="p-4 bg-gray-100 border-t border-gray-300">
          <input
            type="text"
            placeholder="Message"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;