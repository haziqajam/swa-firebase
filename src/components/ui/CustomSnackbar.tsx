import React, { useEffect } from 'react';
import { Button } from '../ui/button'; // Adjust import based on your setup

interface CustomSnackbarProps {
  open: boolean;
  onClose: () => void;
  message: string;
  autoHideDuration?: number;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  open,
  onClose,
  message,
  autoHideDuration = 6000,
}) => {
  useEffect(() => {
    if (open) {
      // Automatically hide snackbar after specified duration
      const timer = setTimeout(onClose, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, onClose]);

  if (!open) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-xs w-full p-4 bg-gray-800 text-white rounded-md shadow-lg">
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <Button onClick={onClose} className="text-white">
          Close
        </Button>
      </div>
    </div>
  );
};

export default CustomSnackbar;
