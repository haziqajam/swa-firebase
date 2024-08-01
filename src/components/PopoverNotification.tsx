"use client";
import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface PopoverNotificationProps {
  notifications: { id: string; type: 'info' | 'warning' | 'error'; message: string; read: boolean }[];
  markAsRead: (id: string) => void;
}

const PopoverNotification: React.FC<PopoverNotificationProps> = ({ notifications, markAsRead }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Show Notifications</Button>
      </PopoverTrigger>
      <PopoverContent className="bg-white border rounded-lg shadow-lg max-h-[400px] overflow-y-auto p-2">
        <ul>
          {notifications.length === 0 ? (
            <li className="text-sm text-gray-500">No notifications</li>
          ) : (
            notifications.map(notification => (
              <li
                key={notification.id}
                className={`p-2 mb-1 ${notification.read ? 'bg-gray-100' : 'bg-white'} border rounded cursor-pointer text-sm`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className={`font-semibold ${notification.type === 'error' ? 'text-red-500' : notification.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'}`}>
                  {notification.type.toUpperCase()}
                </div>
                <p className="text-xs">{notification.message}</p>
              </li>
            ))
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverNotification;
