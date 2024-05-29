import React from 'react';

const users = [
  { id: 1, name: 'Gize', lastMessage: 'gize yet neh', time: '21:27' },
  { id: 2, name: 'Betse Bro', lastMessage: '21:24', time: '21:24' },
  { id: 3, name: 'Sis', lastMessage: 'Balefew eko lijoch birru serubet', time: '20:22' },
  { id: 4, name: 'Kashulu', lastMessage: 'Eko minshe new ... demo lela bota addis je', time: '20:22' },
];

const ChatList = ({ onSelectUser }) => {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition"
          onClick={() => onSelectUser(user.id)}
        >
          <div className="w-10 h-10 rounded-full bg-gray-300 mr-4"></div>
          <div className="flex-1">
            <div className="font-semibold text-gray-800">{user.name}</div>
            <div className="text-sm text-gray-500">{user.lastMessage}</div>
          </div>
          <div className="text-xs text-gray-400">{user.time}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;