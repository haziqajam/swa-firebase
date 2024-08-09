// components/NotificationSystem.tsx
"use client";
import React, { useState } from 'react';
import { useNotifications } from '../components/hooks/useNotifications'; 
import { Button } from '../components/ui/button'; 
import PopoverNotification from './PopoverNotification'; // Ensure this path is correct
import CustomSnackbar from '../components/ui/CustomSnackbar'; 
// components/NotificationSystem.tsx

const NotificationSystem: React.FC = () => {
  const { notifications, addNotification, markAsRead } = useNotifications();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');

  const handleAddNotification = (type: 'info' | 'warning' | 'error', message: string) => {
    addNotification(type, message);
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <div className="flex gap-4 mb-4 ml-22">
        <Button onClick={() => handleAddNotification('info', 'Information notification')} className="w-32">Info</Button>
        <Button onClick={() => handleAddNotification('warning', 'Warning notification')} className="w-32">Warning</Button>
        <Button onClick={() => handleAddNotification('error', 'Error notification')} className="w-32">Error</Button>
      </div>
      <div className="mb-4">
        <PopoverNotification notifications={notifications} markAsRead={markAsRead} />
        <CustomSnackbar
          open={snackbarOpen}
          onClose={handleCloseSnackbar}
          message={snackbarMessage}
          autoHideDuration={6000}
        />
      </div>
    </div>
  );
};

export default NotificationSystem;

